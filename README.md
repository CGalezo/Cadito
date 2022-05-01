## Cadito

Frontend and backend for a E-commerce website developed by Camilo Galezo for a university project.

The endpoints include:
- [x] Login with user and password.
- [x] Login with token.
- [x] Sign up.
- [x] Get user.
- [x] Get posts from a user.
- [x] Get recents posts.
- [x] Get indivual post.
- [x] Create post.
- [x] Get products in cart.
- [x] Add produts to cart.
- [x] Delete products in cart.
- [x] Buy cart.
- [x] Get shopping history.
- [x] Add reviews to a post.
- [x] Get reviews from post.

### Database connection

In the `back` directory

```
cd ./back
```
Create a dotenv environment variables file (.env)

```
touch .env
```
Add a `DATABASE_ACCESS` with your connection string, for example:

```
DATABASE_ACCESS = "mongodb+srv://<username>:<password>@cluster0.uigzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

```
