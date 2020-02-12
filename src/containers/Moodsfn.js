

// export const getFace = state => {
//   if(isTired(state) && isHungry(state)) return '😠';
//   if(isHyper(state) && isHungry(state)) return '😱';
//   if(isTired(state)) return '😴';
//   if(isHyper(state)) return '🙀';
//   if(isEducated(state)) return '😲';
//   if(isHungry(state)) return '😡';

//   return '😀';
// };

// export default class MoodsClass extends Component {
//   state = {
//     coffees: 0,
//     snacks: 0,
//     naps: 0,
//     studies: 0
//   }

//   handleSelection = name => {
//     switch(name) {
//       case 'DRINK_COFFEE':
//         this.setState(state => ({ coffees: state.coffees + 1 }));
//         break;
//       case 'EAT_SNACK':
//         this.setState(state => ({ snacks: state.snacks + 1 }));
//         break;
//       case 'TAKE_NAP':
//         this.setState(state => ({ naps: state.naps + 1 }));
//         break;
//       case 'STUDY':
//         this.setState(state => ({ studies: state.studies + 1 }));
//         break;
//       default:
//         console.log(`unhandled name: ${name}`);
//     }
//   }

//   render() {
//     const face = getFace(this.state);
//     const controlActions = actions.map(action => ({
//       ...action,
//       count: this.state[action.stateName]
//     }));

//     return (
//       <>
//         <Controls actions={controlActions} handleSelection={this.handleSelection}/>
//         <Face emoji={face} />
//       </>
//     );
//   }
// }