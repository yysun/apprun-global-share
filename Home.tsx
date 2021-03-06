import app, {Component} from 'apprun';

export default class HomeComponent extends Component {
  state = 'Home';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
    </div>
  }

  update = {
    '#Home': state => state,
  }
}

const element = 'my-app';
new HomeComponent().mount(element);
console.log('home', { app });