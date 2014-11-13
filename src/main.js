/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;

// create the main context
var mainContext = Engine.createContext();

// your app here
var Surface = new Surface({
  content: "<h3>Hello Charlie</h3>",
  size: [200, 200],
  properties: {
    color: 'white',
    top: '50%',
    left: '50%',
    marginTop: '-50px',
    marginLeft: '-100px'
  }
});

var stateModifier = new StateModifier();

mainContext.add(stateModifier).add(Surface);

stateModifier.setTransform(
  Transform.translate(100, -100, 0),
  { duration : 1000, curve: 'easeInOut' }
);
