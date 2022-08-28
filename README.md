
# Emotional Sentiment Analysis of Twitter content using IBM API

In this project, we are proposing an approach to filter Twitter content by categorizing it to emotional positive and negative content.

This is an Angular project, so you have to make sure that you have nodejs and angular installed 


## IBM API Configuration 
### Prerequisites

1. Sign up for an [IBM Cloud account](https://cloud.ibm.com/registration).
1. Download the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cli-getting-started#overview).
1. Create an instance of the Natural Language Understanding service and get your credentials:
   - Go to the [Natural Language Understanding](https://cloud.ibm.com/catalog/services/natural-language-understanding) page in the IBM Cloud Catalog.
   - Log in to your IBM Cloud account.
   - Click **Create**.
   - Click **Show** to view the service credentials.
   - Copy the `apikey` value.
   - Copy the `url` value.IBM
1. Download the Natural Language Understanding project for nodejs from [github](https://github.com/watson-developer-cloud/natural-language-understanding-nodejs).

### Installation 

1. In the application folder, copy the _.env.example_ file and create a file called _.env_

   ```
   cp .env.example .env
   ```

2. Open the _.env_ file and add the service credentials that you obtained in the previous step.

   Example _.env_ file that configures the `apikey` and `url` for a Natural Language Understanding service instance hosted in the US East region:

   ```
   NATURAL_LANGUAGE_UNDERSTANDING_IAM_APIKEY=X4rbi8vwZmKpXfowaS3GAsA7vdy17Qh7km5D6EzKLHL2
   NATURAL_LANGUAGE_UNDERSTANDING_URL=https://gateway-wdc.watsonplatform.net/natural-language-understanding/api
   ```

### Running locally

1. Install the dependencies

   ```
   npm install
   ```

1. Run the application

   ```
   npm start
   ```
Hence you are running the Natural Language Understanding API locally 


## Twitter API configuration

### Prerequisites

1. Get access to the Twitter API: [Sign up](https://developer.twitter.com/en/portal/petition/essential/basic-info)  for a developer account.
1. Create a Project and an associated developer App.
1. Save your credentials: [API Key and Secret](https://developer.twitter.com/content/developer-twitter/en/docs/authentication/oauth-1-0a/api-key-and-secret),[User Access Tokens](https://developer.twitter.com/content/developer-twitter/en/docs/authentication/oauth-1-0a/obtaining-user-access-tokens),[App Access Token](https://developer.twitter.com/content/developer-twitter/en/docs/authentication/oauth-2-0/bearer-tokens)
1. You can find more about Twitter API in the official [documenation](https://developer.twitter.com/en/docs).


### Installation
1. In the application folder go to environment.ts file, 
1. Replace the credentials by your own values 

### Running the app 

1. install the dependencies by running 
 ```
   npm install
   ```
1. Run the application

   ```
   ng serve --port 'any_port_rather_than_3000' --host 'your_host' --o
   ```