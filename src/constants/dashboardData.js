import logo from "../images/logo1.png";
import avatar from "../images/avatar.jpg";
export const DASHBOARD_DATA = {
    // Data for the header component
    header: {
      title: "Dashboard",
      user: {
        name: "John Doe",
        avatar: avatar
      },
      notifications: 3
    },
  
    // Data for stat cards
    statCards: [
      { id: 1, title: "Total Orders", value: 75, change: 3, increase: true, icon: "ShoppingBasket" },
      { id: 2, title: "Total Delivered", value: 70, change: 3, increase: false, icon: "ShoppingBag" },
      { id: 3, title: "Total Cancelled", value: 5, change: 3, increase: true, icon: "TicketX" },
      { id: 4, title: "Total Revenue", value: 12000, change: 3, increase: false, icon: "PiggyBank" }
    ],
  
    // Data for net profit component
    netProfit: {
      value: 6759.25,
      change: 3,
      percentage: 70
    },
  
    // Data for activity chart
    activityChart: {
      title: "Activity",
      data: [
        { day: '8', value: 8000 },
        { day: '9', value: 3000 },
        { day: '10', value: 4000 },
        { day: '11', value: 3000 },
        { day: '12', value: 3000 },
        { day: '13', value: 2000 },
        { day: '14', value: 4000 },
        { day: '15', value: 5000 },
        { day: '16', value: 4000 },
        { day: '17', value: 7000 },
        { day: '18', value: 6000 },
        { day: '19', value: 9000 },
        { day: '20', value: 11000 },
        { day: '21', value: 15000 },
        { day: '22', value: 12000 },
        { day: '23', value: 8000 },
        { day: '24', value: 5000 },
        { day: '25', value: 7000 },
        { day: '26', value: 9000 },
        { day: '27', value: 6000 },
      ],
      xAxisLabel: "Day",
      yAxisLabel: "Value"
    },
  
    // Data for recent orders
    recentOrders: {
      title: "Recent Orders",
      data: [
        { id: 1, customer: "Wade Warren", orderNo: "15478256", amount: 124.00, status: "Delivered" },
        { id: 2, customer: "Jane Cooper", orderNo: "48965786", amount: 365.02, status: "Delivered" },
        { id: 3, customer: "Guy Hawkins", orderNo: "78958215", amount: 45.88, status: "Cancelled" },
        { id: 4, customer: "Kristin Watson", orderNo: "20965732", amount: 85.00, status: "Pending" },
        { id: 5, customer: "Cody Fisher", orderNo: "95715620", amount: 545.00, status: "Delivered" },
        { id: 6, customer: "Savannah Nguyen", orderNo: "78514568", amount: 128.20, status: "Delivered" }
      ],
      columns: [
        { key: "customer", label: "Customer" },
        { key: "orderNo", label: "Order No." },
        { key: "amount", label: "Amount" },
        { key: "status", label: "Status" }
      ]
    },
  
    // Data for customer feedback
    customerFeedback: {
      title: "Customer's Feedback",
      data: [
        { id: 1, name: "Jenny Wilson", rating: 4, comment: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies." },
        { id: 2, name: "Dianne Russell", rating: 5, comment: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service." },
        { id: 3, name: "Devon Lane", rating: 5, comment: "Normally wings are just \"wings\" but theirs are lean meaty and tender, and the flavor is always on point." }
      ]
    },
  
    // Data for sidebar
    sidebar: {
      logo: logo,
      menuItems: [
        { id: 1, label: "Home", icon: "House", active: true },
        { id: 2, label: "Analytics", icon: "ChartColumn" },
        { id: 3, label: "Completed Orders", icon: "BookCheck" },
        { id: 4, label: "Payments", icon: "Wallet" },
        { id: 5, label: "Store", icon: "Store" }
      ]
    }
  };