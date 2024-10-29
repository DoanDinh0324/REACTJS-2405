function updateNotificationCount(data) {
    // Kiểm tra xem data.notifications có tồn tại và là một mảng
    if (data && Array.isArray(data.notifications)) {
        // Đếm số lượng thông báo chưa đọc
        const unreadNotifications = data.notifications.filter(notification => !notification.is_read);
        const notificationCount = unreadNotifications.length; // Số lượng thông báo chưa đọc
        const notificationBadge = document.querySelector('.absolute.top-2.right-2'); // Chọn đúng phần tử
        notificationBadge.textContent = notificationCount; // Cập nhật số lượng thông báo
    } else {
        console.warn('Notifications array is not defined or not an array:', data);
    }
}

async function fetchNotifications(token) {
    try {
        const response = await fetch('https://api.vdiarybook.net/api/notifications?limit=20&page=1', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'x-api-version': 'v2',
            }
        });

        if (response.ok) {
            const data = await response.json();

            // Đảm bảo docs là một mảng (nếu không, sử dụng mảng rỗng để tránh lỗi)
            const notifications = data.docs || [];

            // Đếm số lượng thông báo chưa đọc
            const unreadCount = notifications.filter(notification => !notification.isRead).length;

            // Gọi hàm updateNotificationCount để cập nhật số lượng chưa đọc
            updateNotificationCount(unreadCount);

        } else {
            console.error('Fetch error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


// Thay thế token với token hợp lệ
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI5YjRlNGM5MzI5M2ZkYmI5M2E4ZjEiLCJlbWFpbCI6ImRvYW5tYW5ocXVhbmc4NTg2ODhAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOnsiY2tlZGl0b3IudHVybi5vbiI6dHJ1ZSwicHJvZmlsZS5wb3B1cF93ZWxjb21lIjp0cnVlLCJwcm9maWxlLnVwZGF0ZV9iYWNrZ3JvdW5kX3Byb2ZpbGUiOnRydWUsInNob3AuY3JlYXRlX3Byb2R1Y3QiOnRydWUsInNob3AuYWN0aXZlX3B1YmxpY19wcm9kdWN0Ijp0cnVlLCJ1cGRhdGVfY292ZXJfaG9tZV92MiI6dHJ1ZSwibm90aWZpY2F0aW9ucy5yZWFkIjp0cnVlLCJub3RpZmljYXRpb25zLmNyZWF0ZSI6dHJ1ZSwibm90aWZpY2F0aW9ucy51cGRhdGUiOnRydWUsImFkdmVydGlzZW1lbnRzLnJlYWQiOnRydWUsImFkdmVydGlzZW1lbnRzLmNyZWF0ZSI6dHJ1ZSwiYWR2ZXJ0aXNlbWVudHMudXBkYXRlIjp0cnVlLCJldmVudHMuY3JlYXRlIjp0cnVlLCJldmVudHMucmVhZCI6dHJ1ZSwiZXZlbnRzLnVwZGF0ZSI6dHJ1ZSwiZXZlbnRzLmRlbGV0ZSI6dHJ1ZSwiZXZlbnRzLnRydXN0Ijp0cnVlLCJldmVudHMuYWRzX3RydXN0Ijp0cnVlLCJwcm9qZWN0cy50cnVzdCI6dHJ1ZSwicHJvamVjdHMuYWRzX3RydXN0Ijp0cnVlLCJwcm9maWxlLnVwZGF0ZV9jb3ZlciI6dHJ1ZSwic2hvcC50cnVzdCI6dHJ1ZSwidXNlci5jcmVhdGVfZG9uYXRlIjp0cnVlLCJnZXRfcmFuZG9tX3RlbXBsYXRlIjp0cnVlLCJjcmVhdGVfam91cm5leV90ZW1wbGF0ZSI6dHJ1ZSwicmVjZWl2ZWRfY2hhcml0eSI6dHJ1ZSwiaG9tZV90cnVzdCI6dHJ1ZSwic2hvcC52aXAiOnRydWUsInBvc3Quc2VsZWN0X3VzZXJfd2FsbCI6dHJ1ZX0sInJvbGUiOiJVU0VSIiwiYXV0aFNlc3Npb25JZCI6IjY3MDkxNzA4NTRiMDdmZGQ3NGQwOTRjMiIsImlhdCI6MTcyODY0ODk2OCwiZXhwIjoxODE1MDQ4OTY4fQ.JEsdnghvutZGMaJ-TIgD0VWhGhb6YulVJIwx63W85-M';
fetchNotifications(token);
