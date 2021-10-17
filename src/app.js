import './css/style.scss'
import Env from './env'


class App {
  
  constructor() {
    this.env = new Env()
  } 

}

const app = new App()

export default App