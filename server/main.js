import { Meteor } from 'meteor/meteor';
import PythonShell from 'python-shell';
Meteor.startup(() => {
  // code to run on server at startup

});

function runPython1(options, callback){
  PythonShell.run('C:/Users/jianF/Desktop/python_meteor/simple-todos/server/art80.py', options, function (err, result) {
        if (err) callback(null,err);
        console.log(result);
        callback(null,result);
  });
};


var wrappedRunPython = Async.wrap(runPython1);


function delayedMessge(delay, message, callback) {
  setTimeout(function() {
    callback(null, message);
  }, delay);
}

//wrapping
var wrappedDelayedMessage = Async.wrap(delayedMessge);

Meteor.methods({
    'runPython': function(input1, input2, input3, input4){
      	var options = {	
      	  args: [input1, input2, input3, input4]
      	};

        var response = wrappedRunPython(options);
        return response;

    },
    'runDownload':function(){
      return "File downloading placeholder";
    }
});
