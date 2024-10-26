import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AndroidComponent } from './android/android.component';
import { IphoneComponent } from './iphone/iphone.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DetailsComponent } from './details/details.component';
import { ChartComponent } from './buying/chart/chart.component';
import { CheckoutComponent } from './buying/checkout/checkout.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AddPhoneComponent } from './dashboard/add-phone/add-phone.component';
import { DeletePhoneComponent } from './dashboard/delete-phone/delete-phone.component';
import { EditPhoneComponent } from './dashboard/edit-phone/edit-phone.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:'shop',component:ShopComponent},
    {path:'android', component:AndroidComponent},
    {path:'iphone',component:IphoneComponent},
    {path:'accessories',component:AccessoriesComponent},
    {path:'details',component:DetailsComponent},
    {path:'chart',component:ChartComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'dashboard/add-phone',component:AddPhoneComponent},
    {path:'dashboard/delete-phone', component:DeletePhoneComponent},
    {path:'dashboard/edit-phone',component:EditPhoneComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'**',component:PagenotfoundComponent}
    // page not found 
];
