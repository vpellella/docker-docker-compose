# docker-docker-compose
All docker projects for practice
This is simple Node server which uses redis server and starts on 4001.
It uses load balancing and if the visits for both redis servers reaches to greater than 15 then node server restarts automatically and starts fresh.

[http://localhost:4001]http://localhost:4001


## Building an app that uses node and redis servers to find number of visits to server

1. Navigate to the location in terminal where docker-compose file is located

2. Run below command to create a image
    ```sh
    docker-compose up --build
    ```    
	
	Use below command by using both step 1 and step 2 at once
    ```sh
    docker compose -f <docker-compose-file-with-location> up --build
    ```
		or
    ```sh
    docker-compose -f <docker-compose-file-with-location> up --build
    ```

Starting docker compose services without building
	```sh
    docker-compose up --build
    ```  
To stop all services in docker compose together use after navigating to location
    ```sh
    docker-compose down
    ```
To list all running containers from docker-compose file
docker compose ps
