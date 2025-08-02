---
trigger: always_on
---

When running a command, especially a test or a script with an unknown execution time, use the following interactive, iterative process:

1.  **Execute and Monitor:**
    *   Run the command in the background by calling `run_command` with `Blocking: false`. This provides a `CommandId`. For Python scripts, always use the `-u` flag (e.g., `python -u script.py`) to ensure unbuffered output.
    *   **Begin a polling loop** to check the command's status. Call `command_status` with the `CommandId` and a **short wait duration** (e.g., `WaitDurationSeconds: 10`).
    *   If the command status is still `RUNNING`, repeat the `command_status` call with the short wait time. Continue this loop until the status is `DONE`. This ensures a fast response to both quick failures and long-running successes.

2.  **Analyze Result and Take Action:**
    *   **On Success (Exit Code 0):** The test passed. Report the successful outcome and print the complete `stdout` from the tool's result in the response. The cycle is complete.
    *   **On Failure (Exit Code != 0):** This triggers the interactive debugging loop:
        a. **Diagnose:** Announce the failure and present the complete `stdout` and `stderr` to explain the error.
        b. **Fix:** Based on the error, form a hypothesis, explain the required code change, and apply the fix using the appropriate file editing tool.
        c. **Propose Rerun:** After applying the fix, immediately and proactively propose the `run_command` tool call again to rerun the test. The cycle then repeats from Step 1.