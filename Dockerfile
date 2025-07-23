#parent image
FROM node:20-alpine

WORKDIR /app

#copy package.json files
COPY package*.json ./

# Install dependencies inside container
RUN npm install

#Copy all files
COPY . .

#Expose port
EXPOSE 5173

#run application
CMD [ "npm" , "run" , "dev" ]