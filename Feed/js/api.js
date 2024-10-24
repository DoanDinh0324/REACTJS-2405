// Fetch unread message count from the API
async function fetchUnreadMessages() {
    try {
        const response = await fetch("https://api.vdiarybook.net/api/v2/conversations/unread", {
            method: 'GET',
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYzOTVhMmZjZmY0Y2JjNzIyNzQ2ZjQiLCJlbWFpbCI6InBodXR1YW50c2JuQGdtYWlsLmNvbSIsInBlcm1pc3Npb25zIjp7InNob3AuY3JlYXRlX3Byb2R1Y3QiOnRydWUsInNob3AuYWN0aXZlX3B1YmxpY19wcm9kdWN0Ijp0cnVlLCJzaG9wLnRydXN0Ijp0cnVlLCJzaG9wLnZpcCI6dHJ1ZSwiZXZlbnRzLmRlbGV0ZSI6dHJ1ZSwiZXZlbnRzLnJlYWQiOnRydWUsImV2ZW50cy51cGRhdGUiOnRydWUsImV2ZW50cy5jcmVhdGUiOnRydWUsImFkdmVydGlzZW1lbnRzLnVwZGF0ZSI6dHJ1ZSwiYWR2ZXJ0aXNlbWVudHMuY3JlYXRlIjp0cnVlLCJhZHZlcnRpc2VtZW50cy5yZWFkIjp0cnVlLCJub3RpZmljYXRpb25zLnVwZGF0ZSI6dHJ1ZSwibm90aWZpY2F0aW9ucy5jcmVhdGUiOnRydWUsIm5vdGlmaWNhdGlvbnMucmVhZCI6dHJ1ZSwiY2tlZGl0b3IudHVybi5vbiI6dHJ1ZSwicHJvZmlsZS51cGRhdGVfYmFja2dyb3VuZF9wcm9maWxlIjp0cnVlLCJwcm9maWxlLnBvcHVwX3dlbGNvbWUiOnRydWUsInByb2ZpbGUudXBkYXRlX2NvdmVyIjp0cnVlLCJwcm9qZWN0cy5hZHNfdHJ1c3QiOnRydWUsInByb2plY3RzLnRydXN0Ijp0cnVlLCJldmVudHMuYWRzX3RydXN0Ijp0cnVlLCJldmVudHMudHJ1c3QiOnRydWUsInBvc3Quc2VsZWN0X3VzZXJfd2FsbCI6dHJ1ZSwicmVjZWl2ZWRfY2hhcml0eSI6dHJ1ZSwidXBkYXRlX2NvdmVyX2hvbWVfdjIiOnRydWUsImNyZWF0ZV9qb3VybmV5X3RlbXBsYXRlIjp0cnVlLCJnZXRfcmFuZG9tX3RlbXBsYXRlIjp0cnVlLCJ1c2VyLmNyZWF0ZV9kb25hdGUiOnRydWUsImhvbWVfdHJ1c3QiOnRydWV9LCJyb2xlIjoiVVNFUiIsImF1dGhTZXNzaW9uSWQiOiI2NzBkMjEzZmJiZDJhYTllYzVjMDE1NDYiLCJpYXQiOjE3Mjg5MTM3MjcsImV4cCI6MTgxNTMxMzcyN30.2nPpNsFp5a3Qg67KGbAxeC3xSie170N9M4rkvwaAN9k",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                "x-api-version": "v2"
            }
        });

        if (response.ok) {
            const data = await response.json();
            // Assuming the unread message count is returned as a number in the `count` field.
            const unreadCount = data.count;

            // Update the notification badge
            document.getElementById('notification-badge').textContent = unreadCount;

            // Optionally hide badge if no unread messages
            if (unreadCount === 0) {
                document.getElementById('notification-badge').style.display = 'none';
            } else {
                document.getElementById('notification-badge').style.display = 'inline-block';
            }
        } else {
            console.error('Failed to fetch unread messages');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function on page load or at certain intervals
fetchUnreadMessages();

// Optionally, you can also refresh unread count periodically (e.g., every 60 seconds)
setInterval(fetchUnreadMessages, 60000); // 60,000 ms = 60 seconds
