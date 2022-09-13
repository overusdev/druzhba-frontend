# After set Dockerfile configuration, you need to run in root directory:

```bash
docker build -t drfront .
```

# Watch images

```bash
docker images
```

# Run image

```bash
docker run -p 24678:24678 <imageid>
```

# Remove image

```bash
docker image rm <imageid>
```

# Stop container

```bash
docker stop <container_id>
```

# Remove container

```bash
docker rm <container_id>
```

# See all containers

```bash
docker ps -a
```

