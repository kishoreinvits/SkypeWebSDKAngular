(function () {
    "use strict";

    define([""], function() {
        var skypeDirective = function($timeout, $rootScope)
        {
            return {
                restrict: 'A',
                scope: {
                    val: '@'
                },
                link: function(scope, element, attrs, controllers) {

                    function guid() {
                        function s4() {
                            return Math.floor((1 + Math.random()) * 0x10000)
                                .toString(16)
                                .substring(1);
                        }

                        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                            s4() + '-' + s4() + s4() + s4();
                    }

                    var changeColor = function(statusId, bgcolor) {
                        console.log(bgcolor);
                        $('#' + statusId).css('background-color', bgcolor);
                        $('#skypeContactPresence-' + statusId).css("background-color", bgcolor);
                    }

                    var id = guid();
                    var imageId = guid();
                    var statusId = guid();
                    var nameId = guid();
                    var availabilityId = guid();
                    var departmentId = guid();
                    var chatId = guid();
                    var mailId = guid();
                    element.addClass('skypeContact');
                    element.after(function () {
                        return ' <div class="skypeContactCard" id="' + id + '" style="display:none;border-style:solid;border-color:grey;position:fixed;background-color:white;border-width:1px;z-index:999999;margin-top:-130px;margin-left:60px;width:420px;">'
                                            + '<div style="float:left;">'
                                                + '<div id="' + statusId + '" style="float:left;width:15px;height:100px;margin-top:5px;background-color:grey;"></div>'
                                                + '<div><img onerror="setNoImage(this)" id="' + imageId + '"style="float:left;width:100px;height:100px; margin-top:5px;"/></div>'
                                                + '<div style="margin-left:130px;margin-top:5px;">'
                                                    + '<div><label style="font-size: 18px;font-weight:300;"id="' + nameId + '"></label></div>'
                                                    + '<div><p id="' + availabilityId + '"></p></div>'
                                                    + '<div><p id="' + departmentId + '"></p></div>'
                                                    + '<div>' +
                                                            '<a id="' + chatId + '" >' 
                                                                + '<img  style = "height:35px;" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAIAAABbkFLLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFySURBVEhL7ZWxkoUgDEX3r+0sbS0tbf0FS1t/w9bSnj3DzToIAruzw1Z7KhKTCyR5vA/Xkn/1HHX18zzXdZ2mqe/7zsMCEyefLChDSZ1kVKQIwzBgAgtzdR1mYY+s+r7vykeL9XVd9sGDifPehrV9ePKuviwLOVRg2zZzZSBAFSPFXAEv6jo1OcdxmKsIYdogvUGsThF/JC3uDaIexOp0iaBqQVJIIZF0sz0PdR2cXpntHGYVC3VOTQ6P/1BnhPkcls+nV7DQr4YhYnakrrKEw+fTK1ioH1PMsDgPdToTlgWUX8ZCPaQjYkakTmjUFuWXsVCPbm/Gn6q3rYx2btXVdCJD5nn2ao+ZC6lMZPprCuHK4zgWXggSSc/+mkDFSV8CRHNHFvWXAHR8jtnkFQOV7/sb3NJpw17UoeG/h9ANgF6xDscUMHGqjZCeWmTVgSKqyQItTLhFATOqdUhJXZDMtKCiCgALTJwFXVFX/w0t1Z37BOm+bCt9DFmFAAAAAElFTkSuQmCC" />' +
                                                            '</a>' 
                                                            + '<a id="' + mailId + '" >'
                                                                + '<img  style = "height:35px;" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAIAAABbkFLLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGoSURBVEhL7ZUhk4MwEIXvX+OQyFoktrIWia3EIrHI+tw3eXtMSEjSTgd3n8ouuy/hbWh/3JX8q+eoq2/bNo5j3/dt2zYeFoQkeWRFGUrqNKMiRei6jhBYWKppCAt7ZNWfz6f60WL9er3sgYeQ5L4Na3tw5Fz9fr/TgwPTNFkqAwVyjBZLBZyo69T0rOtqqSKUaYP0DWJ1TPxIWuwbRDOI1ZkSRVVDUmihkXaLPQd1HZxZWewcYRUrdU5DDo9/UOcK8zi0bxgGr3AObszzbKV/A0PE4khdtoSXb1kWPL3dbl7tAMVUhuMhVN7iSJ2zhLYAGTag7fF4SFRoMPJalYJ2WiyI1CmNxuKl7GXZhmbeg/Oy326aKoXe3oI31UE+CNQ1QGGlnpJ66oz6hVySGyFW6ik5o505ncVH9RxWWp1qeiN9ewUrrd7I9Gv6CA0j+zWBzLnklwB0fCYTfiZVKKYlOjjE6iD73t9glw4HJk7U4cJ/D6E3AGbFOrymQEhSY4T01CKrDpioIQu0CGEXBcLI65CSuqCZK4yKHAAWhCQLuqKu/g1Xqjv3CxaIgCN5thmDAAAAAElFTkSuQmCC" style="padding-left:10px;" /><img /><img /></div>' +
                                                            '</a>'
                                                + '</div>'
                                            + '</div>'
                                    + '</div>';

                    });
                    element.before('<div class = "skypeContactPresence" id = "skypeContactPresence-' + statusId + '" ></div>');
                    var user = scope.val.trim() + '@yourSkypeDomain';
                    element.hover(function () {
                        $('.skypeContactCard').hide();
                        $('#' + id).css('display', 'block');
                    }
                   , function () {
                       //while (true) {
                       //    if (!$('element .skypeContactCard').is(':hover')) {
                               $('#' + id).fadeOut(5000);
                       //        break;
                       //    }
                       //}
                        });

                    // $('#' + id).mouseleave(function () { $('#' + id).css('display', 'none'); })
                    scope.$watch('val', function(newValue, oldValue) {
                        if (newValue)
                            console.log("I see a data change!");
                        $('#' + chatId).attr('href', 'sip:' + newValue + '@yourSkypeDomain');
                        $('#' + mailId).attr('href', 'mailto:' + newValue + '@yourSkypeDomain?Subject="Additional%20Details%20for%20JE"');
                        searchUser(newValue);

                    }, true);
                    var searchUser = function (user) {
                        console.log("User is : " + user);
                        if (user == "@yourSkypeDomain") {
                            $('#skypeContactPresence-' + statusId).css('display', 'none');
                            return;
                        }
                        if (window.skypeWebApp === undefined) {
                            try {
                                $timeout(function() { searchUser(user) }, 5000);
                            } catch (exception) {
                                console.log('in catch block');
                                $timeout(function() { searchUser(user) }, 5000);
                            }
                            return;
                        }
                        console.log('directive link search user function');
                        console.log(user);

                        if (user.split('@').length == 1) {
                            user = user + '@yourSkypeDomain';
                        }
                        var query = window.skypeWebApp.personsAndGroupsManager.createPersonSearchQuery(user);
                        console.log(query);

                        query.limit(1);
                        query.text(user);
                        console.log(query.text)
                        query.getMore().then(function(results) {
                            results.forEach(function(result) {
                                var contact = result.result;

                                contact.avatarUrl.get().then(function(value) {
                                    console.log('avatar is ' + value);
                                    $('#' + imageId).attr("src", value);
                                });
                                contact.displayName.get().then(function(value) {
                                    $('#' + nameId).text(value);
                                });

                                contact.department.get().then(function(value) {
                                    $('#' + departmentId).text(value);
                                });

                                console.log(contact);
                                contact.status.subscribe();

                                contact.status.changed(function(status) {
                                    console.log('status changed');
                                    $('#' + availabilityId).text(status);
                                    if (status == 'Online') {
                                        changeColor(statusId, '#5DD255');
                                    } else if (status == 'Away') {
                                        changeColor(statusId, '#FFD200');
                                    } else if (status == 'BeRightBack') {
                                        changeColor(statusId, '#FFD200');
                                    } else if (status == 'Busy') {
                                        changeColor(statusId, '#D00E0D');
                                    } else if (status == 'DoNotDisturb') {
                                        changeColor(statusId, '#D00E0D');
                                    } else if (status == 'Offline') {
                                        changeColor(statusId, '#B6CFD8');
                                    }
                                });
                            });
                        }, function(data) {
                            console.log(data);
                            console.log('user not found');
                            $timeout(function() { searchUser(user) }, 5000);
                        });
                    }
                    searchUser(user);
                }
            }
        }
        return skypeDirective;
        });
    })();
var setNoImage = function (element) {
    $(element).attr('src', 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABLCAIAAACk+61JAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQBSURBVGhD7ZpXUyJBFIX9//9mTZjFWAJKrRgwi6GgDGApIOoY9pSch2GmJ3D7UrZbfE+7Mn3rfDTd05dh5M//wtDEPYYm7jE0cY+hiXsMymR2dnZzc/PvN6urq3Nzc3xhYCibQOD09PT19fUrRLPZPDg4mJqa4qXaqJmMj4+fn58zdTSe55XLZVzMYXromCwuLuItZ9gUNBoN9clRMIGG8eMUz/Pz88LCAktoYGuChdHpdJiuT1qtViaTYSFrbE3u7u6YSwSGj46OspYdVibYYZnIAhRhOTvkJhMTE4LlEQYfTpRiUQvkJtvb28xizf7+PotaIDep1+sMYg2WPotaIDTB3eDz85NBNMBWztJShCb5fJ4RlCiVSiwtRWiCExQjKFGpVFhaitDk8vKSEZTA+YWlpQhNqtUqIyjRbrdZWorQpFarMYISuDWxtBShydXVFSMogQMlS0sRmhwdHTGCEo+PjywtRWhSLBYZQQksPJaWIjSZn59nBCWwrbO0FKEJwG7DFBqsrKywrhS5ieLNEcvdvkuRm8zMzHx8fDCLHXt7eyxqgdwEqOxgnuep9MBWJuiQXl5emEjKzs4Oy9lhZQLW19dtjvdocpzo47vgTWWuPsHuNz09zSrWKJgAtK9Mlxq077pfFuuYgEKh8Pb2xphJ3N7eKs5GFzUTgC3o4uKCYSPAVNi3h0aEJgi9tLSUzWb5fx94s3F/uL+/999tsCSur6+3traM63tsbGx5eTmXy9l08/2ZICVu7bglM+D3e7yxscGXTRht/cCh1Wqx3HejgoYUf+TLqUlrgiNjTJ94dnYme5CAT1rUQQGz2pdPsgkiYh4SDybNZrOvzwam9+bmhoOjwd6AYxHHxJJgMjk5+fDwwKpJwBbbceLkYFVgKtJvdDhGYE1ycDRxJsjUaDRYLzVYObu7u8Y3EpMGVVzAS1MDmcRdO87EslnHOsZ8VioV1ME/0k+CEVSIn+1Ik7W1NdZwhvgvwiNNLB/xDALMasy0mE3U23QtisUiI4Ywm5TLZQ51DCw5RgxhNsEuzqGOgX2PEUOYTVQeuw0IfPKZsheDCU6HHOQkOIYyaC8GE5x2OMhJDg8PGbQXgwmkOchJ0B0waC8GE2c3ri5Rz4wMJol9388S9czIYOLsFtzF8zwG7cVg8vT0xEGugr6AWX0YTCDNEa5i/G1Y0AStFS93GON3A0ETZ8+OftBxMK6PoImDbUmYQqHAuD6CJo7fFrsYfxIWNEELzssdBvduxvURNDk5OeHlDnN8fMy4PoIm6j8ZGAQ4hTCuj6CJg+17GOPD+6BJXz9g/ilwnmJcH0GT9/d3Xu4w9XqdcX30mPyKGzww/shlhC/+foYmrvH19Q9hN0J7yiaLkQAAAABJRU5ErkJggg==');
}
