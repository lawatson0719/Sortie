//FLOW FOR DAYS. Makes things work. 


// var whatever = React.createClass({

getInitialState : function () {
    return {
      droneObj: '',
      data: droneStore.getDroneStrikes()
    };
  },

  componentDidMount : function () {
    var _this = this;

    // console.log( "mounting" );
    var response = droneStore.fetchDroneStrikes();

    response.done( function( msg ){

      console.log( "msg: ", msg );

      _this.setState({
        data: msg.strike
      });
    } );

    response.fail( function( msg ){

      console.log( "shit broke" );
    } );

    // console.log( "strikes", strikes );
  },

  // render goes here

//)}