import { UserPage } from '@jasonbenfield/sharedwebapp/User/UserPage';
import { Apis } from '../../Apis';

new UserPage((view) => new Apis(view.modalError).ODataDemo());