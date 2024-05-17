import axios from 'axios';

export default function useNotification() {
    const notifications = useState("notifications", (): [] => []);
  
    onMounted(() => {
      const getStudentLogin = JSON.parse(localStorage.getItem('studentLogin'));
  
      axios.get(`https://bookstore-backend-api.vercel.app/api/notification?studentID=${getStudentLogin.studentID}`)
        .then(response => {
          notifications.value = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    });
  
    return {
      notifications
    };
  }
  