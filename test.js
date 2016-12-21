var assert = require("assert");
var wagner = require("wagner-core");

// CRUD operations with model

describe('Test CRUD operations with model', function() {
    
    var Oubliee;
    var myReminder;
    
    var models = require('./models.js')(wagner);
    Oubliee = models.Oubliee;
    
    before(function(done) {
        myReminder = new Oubliee({
            id: 7,
            Name: 'Consent for Establishment',
            Description: 'Consent from Karataka State Pollution Control Board',
            dueDate: new Date(2018, 01, 01),
            Email: ['sanjay.bhatikar@gmail.com'],
            Phone: '+91 7777770000',
        });
        done();
    });
    
    after(function(done) {
        Oubliee.remove(function(err, doc) {
            assert.ifError(err);
            done(); 
        });
    });
    
    it("[CRUD] Inserts a new record", function(done) {
        console.log(myReminder);
        myReminder.save(function(err, doc) {
            assert.ifError(err);
            Oubliee.findOne({}, function(err, res) {
                assert.ifError(err);
                assert.equal(res.id, myReminder.id);
                assert.equal(res.Name, myReminder.Name);
                assert.equal(res.Email, myReminder.Email);
                assert.equal(res.dueDate.toDateString(), myReminder.dueDate.toDateString());
                assert.equal(res.Phone, myReminder.Phone);
                done();
            })
        })    
    });
});