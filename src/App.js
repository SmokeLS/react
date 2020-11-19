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

import ErrorMessage from './components/error/errorMessage';
import Text from "./components/text";
import Slider from "./components/slider";
import Square from './components/square';
import InputText from './components/inputText';
import Paragraph from './components/paragraph';
import Menu from './components/menu';

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
];

const imgs = [
    "https://pbs.twimg.com/media/DZc1BqPWkAID4hr.jpg:large",
    "https://www.entranceconsulting.com/wp-content/uploads/2017/01/react-1.png",
    "https://cdn-media-1.freecodecamp.org/images/1*T1b83o47E1AI0lTpwzHVvA.png"
];

const textButtons = [
    "Action",
    "Another action",
    "Something"
]

const copyright = "@copyright by me";

function App() {
  return (
    <>
      
      {/* 1 часть задания
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

      <Pagination countArticles="49" limit="10" /> */}

      <ErrorMessage />
      <Text />
      <Slider imgs={imgs} />    
      <Square />
      <InputText min="3" max ="5"/>
      <Paragraph text='Создать компонет, которому передаем текст (3-4 абзаца с точкой).
      Компонент выводит только первое предложение.
      И есть кнопка "Показать подробнее" - при клике на неё выводиться вместо одного предложения весь текст.
      (состояние с тру или фолс)'/>
      <Menu textButtons={textButtons} title="Кнопка выпадающего списка"/>


    </>
  );
}

export default App;
