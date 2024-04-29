export default defineNuxtRouteMiddleware((to, from) => {
    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }

    if (process.client) {

        console.log(to.path);

        const publicRoutes = [
          '/',
          '/login',
          '/sign-up',
          '/forgot-password',
        ]
    
        const checkCredentials = JSON.parse(localStorage.getItem('studentLogin') || '{}');
        
        if (publicRoutes.includes(to.path) && checkCredentials.studentID) {
          return navigateTo('/home')
        }

        if (!publicRoutes.includes(to.path) && !checkCredentials.studentID) {
          alert('Login first!');
          return navigateTo('/')
        }
    
    }


    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    // if (to.path !== '/') {
    //   return navigateTo('/')
    // }
  })