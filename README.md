<a href="
https://www.lantek.com/es/trabaja-con-nosotros">
![logo](https://github.com/Greezaaa/Lantek_coding_challenge/assets/55212034/ddf4e375-bfb5-4c97-92bb-5da89a0386f6)
</a>

# Coding Challenge 
  
<a href="https://greezaaa.es" target="_blank">![YA_logo](https://github.com/Greezaaa/Lantek_coding_challenge/assets/55212034/b711c81d-6a65-4b28-8ad3-0c2e56e4cac2) </a>
<span style="width: 20px; display: inline-block;"></span><span style="width: 20px; display: inline-block;"></span>
<a href="https://angular.dev" target="_blank">
![angular](https://github.com/Greezaaa/Lantek_coding_challenge/assets/55212034/92ac435f-3988-4de1-a421-86efce07989f)
</a>

Welcome to the Lantek Coding Challenge app! Below are instructions on setting up the app and some additional information.

## 01Prerequisites
Make sure you have the following software installed on your machine:

```bash
Node.js (version 18.18.2 or later)
npm (version 9.8.1 or later)
Angular CLI (version 17.0.0)
```

## 02Getting Started
#### Clone the Repository:

```bash
git clone https://github.com/your-username/lantek-coding-challenge.git
```

#### Navigate to the Project:

```bash
cd lantek-coding-challenge
```

#### Install Dependencies:
```bash
npm install
```

#### Create environment.ts:
In the src/environments folder, create an environment.ts file and provide the necessary API configuration:

```typescript

// src/environments/environment.ts
export const environment = {
  production: false,
  API_BASE_URL: 'https://app-academy-neu-codechallenge.azurewebsites.net/api/cut/',
  API_USERNAME: 'API_USERNAME',
  API_PASSWORD: 'API_PASSWORD'
};
```
#### Run the App:
```bash
ng serve
```
####  Open in Browser:

Open your browser and navigate to http://localhost:4200/ to see the app in action.

## 03Technical Questions and Responses

#### Q - How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test, use this as an opportunity to explain what you would add.
A - I spent a little over 3 hours, as it was my first time using Angular 17, and I was learning how to use it. With more time, I would dedicate it to adding more tests. I have to admit that unit testing is not my strong suit, and I would like to deepen my understanding of it.

#### Q - What was the most useful feature added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

A - Angular 17 Deferrable Views. 

One of the most impactful features introduced in Angular 17 is Deferrable Views. This feature provides a substantial boost to both performance and developer experience. Deferrable Views enable developers to defer the rendering of specific sections of an application until they are required, resulting in enhanced overall performance.
```typescript
@if (machines && machines.length > 0) {
    @defer {
        <div class="content">
            @for (machine of machines; track machine.id) {
                <app-machine [machine]="machine" />
            }
        </div>
    } @loading ( minimum 100ms) {
        <p>Loading....</p>
    }
} @else {
    <h4>No data available.</h4>
    <p class="no-response">Please wait, data will be loaded automatically when the page is loaded.</p>
}
```
In this example, the @defer directive allows the application to postpone rendering the detailed product views until they are needed, contributing to a more efficient and responsive user experience.

#### Q - How would you track down a performance issue in production? Have you ever had to do this?
A - If the app seems slow or has problems, I've used tools like Chrome DevTools to see what's going on. I'm not an expert in this, but I've also looked at error messages to find and fix issues. I know there's more to learn about making apps run smoothly, and I'm open to learning more."

#### Q - How would you improve the Lantek API that you just used?
A - In the API, I would enhance the authentication method to something more advanced like JWT or OAuth2 for better security and scalability. 

The API response is limited, providing minimal data. I would consider expanding it by including additional information, such as the total number of items found and implementing a paginator. This would not only enrich the response but also make it more developer-friendly and efficient.
 
## 04Additional Notes

#### Styling Disclaimer:
The app's components may not have extensive styling as the primary focus has been on functionality and coding aspects. Note that the primary emphasis is on the code itself.

Feel free to explore the app and use it according to your needs. If you encounter any issues or have suggestions, especially regarding code improvements, please don't hesitate to reach out. 


Happy coding!


<a href="https://greezaaa.es" target="_blank">![YA_logo](https://github.com/Greezaaa/Lantek_coding_challenge/assets/55212034/d1edb157-ed98-486f-a716-09f7aeb51f15)
</a><span style="width: 20px; display: inline-block;"></span><a href="https://www.linkedin.com/in/yevheniy-alekseyev/" target="_blank">![linkedin-icon-2](https://github.com/Greezaaa/Lantek_coding_challenge/assets/55212034/2fed505f-32d4-42c6-a784-82f3485235c1)
</a><span style="width: 20px; display: inline-block;"></span><a href="mailto:hi@greezaaa.es">![gmail-icon](https://github.com/Greezaaa/Lantek_coding_challenge/assets/55212034/a666736c-d678-4687-8254-f1bf778edcfd)
</a>
