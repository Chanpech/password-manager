# Passwords-Manager
A secure and user-friendly password manager application built with React for the front end and Node.js for the back end, designed to help users safely store and manage their passwords. The application uses server-side hashing to store sensitive data and offers an intuitive interface for managing credentials across various sites. Dockerized for seamless deployment and scalability, this project showcases best practices in modern web development, including secure data handling, RESTful API design, and containerized application architecture.

# Dockerized and Deployment
Both frontend and backend applications have been dockerized, built, and pushed to Azure Cloud Registries. Then, we set up a dedicated Web Services Plan and the necessary resource groups using the two registries. Finally, the frontend and backend are individually deployed as a single instance web app.  
<br>URLs may be changed due to the free resources allocated by the Azure Cloud</br>
<h4>**Note domain name may change due to the free nature of azure free tier**</h4>
<ul> 
  <li>Frontend: https://secure-temporary-passwords-manager-bsebccdtddfccvdk.eastus-01.azurewebsites.net/</li>
  <li>Backend: https://teseter-password-manager-backend-f4hmejdmhefef4ea.eastus-01.azurewebsites.net/</li>
</ul>


# Limitation 
Currently, our application can only store passwords for the current session. 

# Future Development
Integrate user authentication and integrate a server-side database solution.
