# Shop.com
React Native Expo iOS &amp; Android

<h2>Requirements</h2>


node.js <br>
apikey @ shop.com<br>
expo client<br>
npm
<ul>
  <li>expo-location</li>
  <li>expo-permissions</li>
  <li>react-native-webview</li>
  <li>react-navigation-stack</li>
  <li>react-navigation-tabs</li>
  <li>axios</li>
</ul>
  
<h2>Setup</h2>
<ol>
  <li>Create expo init with tabs</li> 
  <li>Create Folders</li>
  <ul>
      <li>api</li>
      <li>hooks</li>
      <li>components</li>
      <li>screens</li>
</ul>
<li>Change tabs and screens to match desired</li>
</ol>

<h2>API</h2>
<p>Create new js for api with axios to fetch json data with headers</p>
<p>Create new config.json to put apikey and reference it</p>

<h2>Hooks</h2>
<p>Setup useLocation using expo-location to gain permissions, find user location, reverse
   geocode user location for postal code, then return postal code for future local screen,</p>
<p>Setup useShopResults to search using api from shop.com and return search function, results, and error messages</p>

<h2>Components</h2>
<p>We are going to setup our components for other screens here to keep code clean and short.</p>
<p>Create Searchbar with text area input and connect it with a button with onTermSubmit, onTextChange, and a search term</p>
<p>Create a flatlist with onPress for our results from the Searchbar, using the useShopResults hook, and passing the item.id</p>
<p>Create details for each item in the list passing the id as well.</p>
<p>Edit TabBarIcon for whatever iconfonts you want</p>

<h2>Screens</h2>
<p>Edit Homescreen to use a Webview of the front page of shop.com and remove headers</p>
<p>Create SearchScreen and import SearchBar component and the flatlist</p>
<p>Create ProductScreen after user selects item and grab the id to use with Webview and api</p>
<p>Create LocalScreen and import postalcode to autofill webview to match users location</p>

<h2>Navigation</h2>
<p>The main navigation will be tabs at the bottom of the screen, but some screens will be on a stack to allow user to go back</p>
<img src="https://github.com/zachywheeler/Shop.com/blob/master/Shop%20App.png?raw=true">


<h2>Build</h2>
<p>Building and compiling are easily done with expo, and editing app.json to format for both Android and iOS.</p>

<h2>Strengths</h2>
<p>Aesthetically pleasing user interface that changes works smoohthly 
  between iOS and Android. Utilizes fully featured website, to give a new experience as the website updates.
  Uses Device location to offer local deals to user. Api retrieves products and 
  product details. Available on https://expo.io/@zachywheeler/shop-zachy
</p>

<h2>Limitations</h2>
<p>The overall filesize is large and could be more optimized over time. Lacking other functionalities of 
  website, such as categories, filter, and login. Headers are rendered for a second before removed.</p>
  
<h2>Download Links</h2>
<a href="https://drive.google.com/open?id=1WeTb8vYDhwYuWWbUx6qxNHmkXFQe6RVi">Android .apk</a>
<a href="https://drive.google.com/open?id=1PXORtD94hIk2L0vCvoOVKHTbhLk33Y87">iOS .ipa</a>
