import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import moment from 'moment';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import Moment from 'moment';

const ItemPage = React.lazy(()=> import('pages/inventory/Item'));
const VendorPage = React.lazy(()=> import('pages/inventory/Vendors'));
const OwnerPage = React.lazy(()=>import('pages/inventory/Owner'));
const OrderPage = React.lazy(()=> import('pages/inventory/Orders'));
const ViewItem = React.lazy(()=> import('pages/view/Item'));
const ViewVendor = React.lazy(()=> import('pages/view/Vendor'));
const ViewOwner  = React.lazy(()=>import('pages/view/Owner'));
const ViewOrder = React.lazy(()=> import('pages/view/Order'));

const AlertPage = React.lazy(() => import('pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('pages/ButtonPage'));
const CardPage = React.lazy(() => import('pages/CardPage'));
const ChartPage = React.lazy(() => import('pages/ChartPage'));
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('pages/DropdownPage'));
const FormPage = React.lazy(() => import('pages/FormPage'));
const InputGroupPage = React.lazy(() => import('pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('pages/ModalPage'));
const ProgressPage = React.lazy(() => import('pages/ProgressPage'));
const TablePage = React.lazy(() => import('pages/TablePage'));
const TypographyPage = React.lazy(() => import('pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('pages/WidgetPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      data:[],
    }
  }


  componentDidMount = () => {
    console.log("Hello"+moment().format("YYYY-MM-DD"));

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3001/orderexpdate", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({data:result})
        console.log(this.state.data)
        this.state.data && this.state.data.map((item)=>{
            return(()=>{
              const dd = item.wupto;
              const a = Moment(dd).format('MM/DD/YYYY')
              const b = moment().format('MM/DD/YYYY');
              const date1 = new Date(a);
              const date2 = new Date(b);
              console.log(date1+date2);
              const diffTime = Math.abs(date2 - date1);
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
              // const years = diffDays/365;
              // const days1 = diffDays%365;
             // alert(diffTime + " milliseconds");
            //  alert("Remaining Days "+diffDays+" For Item "+item.item_name);
             // alert(years + "Years" + days1 + "Days");
             if(diffDays < 70){
              var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              fetch("http://localhost:3001/sendmail/"+item.item_name, requestOptions)
                .then(response => response.json())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
             }
            console.log(item.wupto);
            })
            // const date1 = new Date('12/14/1997'); //m/d/y
            // const date2 = new Date('06/15/2021');
           
      })
      })
      .catch(error => console.log('error', error));
  }

  //  reminder = () => {
  //     alert("Email Generated...");
  // }

  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/items" component={ItemPage} />
                <Route exact path="/vendor" component={VendorPage}/>
                <Route exact path="/owner" component={OwnerPage}/>
                <Route exact path="/orders" component={OrderPage}/>
                <Route exact path="/view_item" component={ViewItem}/>
                <Route exact path="/view_vendor" component={ViewVendor}/>
                <Route exact path="/view_owner" component={ViewOwner}/>
                <Route exact path="/view_order" component={ViewOrder}/>
                
                <Route exact path="/login-modal" component={AuthModalPage} />
                <Route exact path="/buttons" component={ButtonPage} />
                <Route exact path="/cards" component={CardPage} />
                <Route exact path="/widgets" component={WidgetPage} />
                <Route exact path="/typography" component={TypographyPage} />
                <Route exact path="/alerts" component={AlertPage} />
                <Route exact path="/tables" component={TablePage} />
                <Route exact path="/badges" component={BadgePage} />
                <Route exact path="/button-groups" component={ButtonGroupPage}/>
                <Route exact path="/dropdowns" component={DropdownPage} />
                <Route exact path="/progress" component={ProgressPage} />
                <Route exact path="/modals" component={ModalPage} />
                <Route exact path="/forms" component={FormPage} />
                <Route exact path="/input-groups" component={InputGroupPage} />
                <Route exact path="/charts" component={ChartPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
