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


// Create WebSocket connection
const socket = new WebSocket("wss://api.vdiarybook.net/socket.io/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI5YjRlNGM5MzI5M2ZkYmI5M2E4ZjEiLCJlbWFpbCI6ImRvYW5tYW5ocXVhbmc4NTg2ODhAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOnsiY2tlZGl0b3IudHVybi5vbiI6dHJ1ZSwicHJvZmlsZS5wb3B1cF93ZWxjb21lIjp0cnVlLCJwcm9maWxlLnVwZGF0ZV9iYWNrZ3JvdW5kX3Byb2ZpbGUiOnRydWUsInNob3AuY3JlYXRlX3Byb2R1Y3QiOnRydWUsInNob3AuYWN0aXZlX3B1YmxpY19wcm9kdWN0Ijp0cnVlLCJ1cGRhdGVfY292ZXJfaG9tZV92MiI6dHJ1ZSwibm90aWZpY2F0aW9ucy5yZWFkIjp0cnVlLCJub3RpZmljYXRpb25zLmNyZWF0ZSI6dHJ1ZSwibm90aWZpY2F0aW9ucy51cGRhdGUiOnRydWUsImFkdmVydGlzZW1lbnRzLnJlYWQiOnRydWUsImFkdmVydGlzZW1lbnRzLmNyZWF0ZSI6dHJ1ZSwiYWR2ZXJ0aXNlbWVudHMudXBkYXRlIjp0cnVlLCJldmVudHMuY3JlYXRlIjp0cnVlLCJldmVudHMucmVhZCI6dHJ1ZSwiZXZlbnRzLnVwZGF0ZSI6dHJ1ZSwiZXZlbnRzLmRlbGV0ZSI6dHJ1ZSwiZXZlbnRzLnRydXN0Ijp0cnVlLCJldmVudHMuYWRzX3RydXN0Ijp0cnVlLCJwcm9qZWN0cy50cnVzdCI6dHJ1ZSwicHJvamVjdHMuYWRzX3RydXN0Ijp0cnVlLCJwcm9maWxlLnVwZGF0ZV9jb3ZlciI6dHJ1ZSwic2hvcC50cnVzdCI6dHJ1ZSwidXNlci5jcmVhdGVfZG9uYXRlIjp0cnVlLCJnZXRfcmFuZG9tX3RlbXBsYXRlIjp0cnVlLCJjcmVhdGVfam91cm5leV90ZW1wbGF0ZSI6dHJ1ZSwicmVjZWl2ZWRfY2hhcml0eSI6dHJ1ZSwiaG9tZV90cnVzdCI6dHJ1ZSwic2hvcC52aXAiOnRydWUsInBvc3Quc2VsZWN0X3VzZXJfd2FsbCI6dHJ1ZX0sInJvbGUiOiJVU0VSIiwiYXV0aFNlc3Npb25JZCI6IjY3MDkxNzA4NTRiMDdmZGQ3NGQwOTRjMiIsImlhdCI6MTcyODY0ODk2OCwiZXhwIjoxODE1MDQ4OTY4fQ.JEsdnghvutZGMaJ-TIgD0VWhGhb6YulVJIwx63W85-M&EIO=4&transport=websocket");

// When the connection opens
socket.onopen = function() {
    console.log("WebSocket connection successful");
};

// Store notifications
let notifications = [];

// Function to update the notification list
function updateNotificationList() {
    const notificationList = document.querySelector("#notification-list .space-y-4");
    notificationList.innerHTML = ''; // Clear old notifications

    if (notifications.length > 0) {
        notifications.forEach(notification => {
            const notificationItem = document.createElement('div');
            notificationItem.classList.add('flex', 'items-start', 'space-x-3');

            notificationItem.innerHTML = `
                <img src="${notification.avatar}" alt="Avatar" class="rounded-full w-10 h-10">
                <div class="flex-1">
                    <p class="text-sm"><span class="text-blue-500 font-bold">${notification.name}</span> ${notification.message}</p>
                    <span class="text-gray-400 text-xs">${notification.time}</span>
                </div>
                <img src="${notification.reaction}" alt="Reaction" class="w-5 h-5">
            `;

            notificationList.appendChild(notificationItem);
        });
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = "You have no notifications.";
        notificationList.appendChild(emptyMessage);
    }
}

// Function to fetch notifications from API
async function fetchNotifications() {
    try {
        const response = await fetch('https://api.yourservice.com/notifications'); // Replace with your actual API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        notifications = data.notifications || []; // Update notifications from API
        document.getElementById("notification-badge").innerText = notifications.length;
        updateNotificationList(); // Update the list after fetching
    } catch (error) {
        console.error("Failed to fetch notifications:", error);
        // Optionally set a default notification here if needed
        notifications = [
            {
                avatar: "https://via.placeholder.com/40",
                name: "Phước Khánh Linh Nguyễn",
                message: "đã bày tỏ cảm xúc về Nhật ký của bạn",
                time: "7 hours ago",
                reaction: "https://via.placeholder.com/20"
            }
        ];
        document.getElementById("notification-badge").innerText = notifications.length;
        updateNotificationList(); // Update the list with default notification
    }
}

// WebSocket message handler
socket.onmessage = function(event) {
    let dataString = event.data;

    try {
        if (dataString.startsWith('0')) {
            dataString = dataString.substring(1);
        }

        const data = JSON.parse(dataString);
        
        // Call fetchNotifications to get the latest notifications
        fetchNotifications();

    } catch (error) {
        console.error("Failed to parse JSON:", event.data, error);
    }
};

// WebSocket error handling
socket.onerror = function(error) {
    console.error("WebSocket error:", error);
};

// WebSocket close handling
socket.onclose = function(event) {
    console.log("WebSocket connection closed:", event);
};

// Click event to show/hide notification list
document.getElementById("notification-button").onclick = function() {
    const notificationList = document.getElementById("notification-list");
    notificationList.classList.toggle('hidden'); // Toggle visibility
};

// Initial fetch of notifications when the page loads
fetchNotifications();
