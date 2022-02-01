import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client';

const httpLink = createUploadLink({
	uri: "http://localhost:4000",
});

new ApolloClient({
	cache: new InMemoryCache(),
	link: httpLink
});

const root = document.getElementById('root')
if (root) {
	root.innerHTML = 'Huzzah! Build successful!';
}