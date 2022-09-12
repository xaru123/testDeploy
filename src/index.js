import Router 		from './services/Router';
import Index 		from './layout/Index';
import FormPage 	from './pages/FormPage';
import IndexPage 	from './pages/IndexPage';
import Store 		from './services/Store';
import SomeService 	from './services/SomeService';

window.AppStore = Store;

const service = new SomeService();
service.start();

const router = new Router('.app');

router
.use('/form', Index, 'div', {
	title: 'Страница с формой',
	content: new FormPage('div'),
})
	.use('/', Index, 'div', {
		title: 'Главная страница', 
		content : new IndexPage('div'),
	})

	.start();
