import logo from "./logo.svg";
import "./App.css";
import IdCard from "./components/idCard/IdCard";
import Image from "./components/imageComponent/Image";
import Book from "./components/book/Book";
import Movie from "./components/movieComponent/Movie";
import List from "./components/list/List";
function App() {
  return (
    <div className="App">
      <h1 className="listTitle">ID CARDS</h1>
      <List>
        <IdCard
          firstName="Milos"
          lastName="Danilovic"
          city="Pljevlja"
          dateOfBirth="25/11/1998"
          image={<Image src="profile-pic.png" />}
        />
        <IdCard
          firstName="Milos"
          lastName="Danilovic"
          city="Pljevlja"
          dateOfBirth="25/11/1998"
          image={<Image src="maleAvatar.jpg" />}
        />
        <IdCard
          firstName="Milos"
          lastName="Danilovic"
          city="Pljevlja"
          dateOfBirth="25/11/1998"
          image={<Image src="maleAvatar.jpg" />}
        />
      </List>
      <h1 className="listTitle">BOOKS </h1>
      <List>
        <Book
          title="The Martian"
          year="2011"
          author="Andy Weir"
          quote="Mark Watney: I am definitely going to die up here ... if I have to listen to any more god-awful disco music."
          image={<Image src="theMartian.jpg" />}
        />
        <Book
          title="Robinson Crusoe"
          year="1719"
          author="Daniel Defoe"
          quote="“Thus fear of danger is ten thousand times more terrifying than danger itself.”"
          image={<Image src="RobinsonCrusoe.webp" />}
        />
        <Book
          title="Misery"
          year="1987"
          author="Stephen King"
          quote="“There may be fairies, there may be elves, but God helps those who help themselves.”"
          image={<Image src="misery.jpg" />}
        />
      </List>
      <h1 className="listTitle">MOVIES</h1>
      <List>
        <Movie
          title="The Departed"
          year="2006"
          director="Martin Scorsese"
          actors="Leonardo DiCaprio,Matt Damon,Mark Wahlberg"
          genre="Thriller"
          image={<Image src="theDeparted.jpg" />}
        />
        <Movie
          title="In Bruges"
          year="2008"
          director="Martin McDonagh"
          actors="Collin Farrell,Brendan Gleeson,Ralph Fines"
          genre="Dark Comedy"
          image={<Image src="inBruge.jpg" />}
        />
        <Movie
          title="The Social Network"
          year="2010"
          director="David Fincher"
          actors="Jesse Eisenberg,Andrew Garfield,Justin Timberlake"
          genre="Drama"
          image={<Image src="theSocialNetwork.jpg" />}
        />
      </List>
    </div>
  );
}

export default App;
