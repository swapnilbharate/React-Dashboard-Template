export const dashboardStats = [
    { title: 'Active Users', value: 1284, prefix: '', suffix: '', change: '+12.5%', trend: 'up', icon: 'users' },
    { title: 'Revenue', value: 8423000, prefix: '₹', suffix: '', change: '+8.2%', trend: 'up', icon: 'revenue' },
    { title: 'Orders', value: 327, prefix: '', suffix: '', change: '+4.1%', trend: 'up', icon: 'orders' },
    { title: 'Retention', value: 94.2, prefix: '', suffix: '%', change: '-1.2%', trend: 'down', icon: 'growth' }
];

export const monthlyRevenue = [42, 56, 48, 71, 64, 84, 90, 76, 88, 95, 105, 118];

export const trafficSources = [
    { label: 'Direct', value: 38, color: '#7c3aed' },
    { label: 'Organic', value: 24, color: '#312e81' },
    { label: 'Referral', value: 19, color: '#059669' },
    { label: 'Social', value: 19, color: '#f59e0b' }
];

export const recentUsers = [
    { name: 'Ananya Patil', email: 'ananya@swapnilbusinesshub.in', role: 'Product Lead', status: 'Online', department: 'Product' },
    { name: 'Rohit Deshmukh', email: 'rohit@swapnilbusinesshub.in', role: 'Finance', status: 'Busy', department: 'Finance' },
    { name: 'Neha Pawar', email: 'neha@swapnilbusinesshub.in', role: 'Admin', status: 'Online', department: 'Operations' },
    { name: 'Devendra Joshi', email: 'devendra@swapnilbusinesshub.in', role: 'Manager', status: 'Away', department: 'Sales' }
];

export const activityFeed = [
    { id: 1, title: 'Ananya Patil approved the Pune sales plan', detail: 'The monthly branch plan was cleared by the leadership team.', time: '2 min ago', accent: 'success' },
    { id: 2, title: 'Rohit Deshmukh launched the festival campaign', detail: 'The Nashik retail campaign is now live for premium clients.', time: '16 min ago', accent: 'primary' },
    { id: 3, title: 'Neha Pawar completed the Mumbai audit', detail: 'Compliance checks for the central office were reviewed successfully.', time: '34 min ago', accent: 'warning' }
];

export const systemHealth = [
    { label: 'CPU Load', value: 67, color: 'success' },
    { label: 'Memory', value: 54, color: 'primary' },
    { label: 'Disk', value: 82, color: 'warning' },
    { label: 'Latency', value: 45, color: 'danger' }
];

export const usersSeed = [
    { id: 1, name: 'Ananya Patil', email: 'ananya@swapnilbusinesshub.in', role: 'Admin', status: 'Active', location: 'Pune', department: 'Product' },
    { id: 2, name: 'Rohit Deshmukh', email: 'rohit@swapnilbusinesshub.in', role: 'Manager', status: 'Away', location: 'Nashik', department: 'Finance' },
    { id: 3, name: 'Neha Pawar', email: 'neha@swapnilbusinesshub.in', role: 'User', status: 'Active', location: 'Mumbai', department: 'Ops' },
    { id: 4, name: 'Devendra Joshi', email: 'devendra@swapnilbusinesshub.in', role: 'Admin', status: 'Pending', location: 'Nagpur', department: 'Sales' },
    { id: 5, name: 'Mina Ali', email: 'mina@swapnilbusinesshub.in', role: 'Manager', status: 'Active', location: 'Aurangabad', department: 'Marketing' },
    { id: 6, name: 'Owen Brooks', email: 'owen@swapnilbusinesshub.in', role: 'User', status: 'Away', location: 'Solapur', department: 'Support' }
];

export const reportSummaries = [
    { label: 'Total Reports', value: '248', change: '+18%' },
    { label: 'Pending', value: '29', change: '-6%' },
    { label: 'Completed', value: '214', change: '+12%' },
    { label: 'Revenue', value: '₹84.2L', change: '+9%' }
];

export const notificationsSeed = [
    { id: 1, title: 'Weekly digest ready', message: 'A polished summary of your performance is ready to review.', time: 'Just now', unread: true, important: true, category: 'All' },
    { id: 2, title: 'New invoice received', message: 'An invoice for your latest enterprise subscription is ready.', time: '15 min ago', unread: true, important: false, category: 'Unread' },
    { id: 3, title: 'Storage almost full', message: 'Your archive space is at 82% capacity and needs attention.', time: '1 hour ago', unread: false, important: true, category: 'Important' }
];

export const monthlyReportData = [
    { name: 'Jan', revenue: 22000, growth: 12 },
    { name: 'Feb', revenue: 24800, growth: 15 },
    { name: 'Mar', revenue: 26400, growth: 14 },
    { name: 'Apr', revenue: 28900, growth: 16 }
];

export const yearlyReportData = [
    { name: '2022', revenue: 280000, customers: 820 },
    { name: '2023', revenue: 336000, customers: 980 },
    { name: '2024', revenue: 412000, customers: 1150 },
    { name: '2025', revenue: 488000, customers: 1320 }
];

export function getInitials(name) {
    return name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
}
