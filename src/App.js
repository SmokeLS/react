import Header from './components/header';
import Navigation from './components/nav';
import Footer from './components/footer';

import Button from './components/content/buttons';
import Card from './components/content/card';
import Breadcrumb from './components/content/breadcrumb';
import Alert from './components/content/alerts';
import Input from "./components/content/input";
import Title from "./components/content/title";
import Rating from "./components/content/rating";
import Tag from "./components/content/tag";
import Pagination from "./components/content/pagination";

import './App.css';

import {ReactComponent as Globe} from "./images/globe.svg";

const list = [
  {title: 'Home', link: '/home', id: 1},
  {title: 'Library', link: '/library', id: 2},
  {title: 'Data', link: '/data', id: 3},
  {title: 'News', link: '/news', id: 4},
  {title: 'About us', link: '/aboutus', id: 5}
];

const tags = [
  { title: 'a', href: 'http://link1.ru', id: 1},
  { title: 'a', href: 'http://link2.ru', id: 2},
  { title: 'a', href: 'http://link3.ru', id: 3},
]

const copyright = "@copyright by me";

function App() {
  return (
    <>
      <Header title="MySite" Logo={Globe}/>
      <Navigation menu={list}/>
      <Footer copyright={copyright}/>

      <Alert text="some text" color="alert-success"/>
      <Button text="some text1" style="btn-primary" type="button"/>
      <Button text="some text2" style="btn-success btn-lg" type="a" href="#"/>
      <Button text="some text3" style="btn-outline-warning" type="submit"/>
      <Card href="https://zagge.ru/wp-content/uploads/2019/06/aHR0cDovL3d3dy5saXZlc2N.jpg" text="<p>text text</p>"/>
      <Breadcrumb items={list}/>

      <Title text="title text" size="44" color="red"/>
      <Input type="text" placeholder="placeholder" value="value" /> 

      <Rating totalStars="4" selectedStars="3" />

      <Tag tags={tags}/>

      <Pagination countArticles="49" limit="10" />
    </>
  );
}

export default App;
