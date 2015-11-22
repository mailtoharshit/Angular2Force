 <script>
             function forceList(){
                  this.accounts = ["BurlingTon Textiles", "Texas Instruments", "NASA", "AirBnb", "Google"];
                }
                  forceList.annotations=[
                    new angular.ComponentAnnotation({
                      selector : "forceList"
                    }),
                    new angular.ViewAnnotation({
                      directives: [angular.NgFor],
                      template: '<ul class="collection">'+
                      '<li *ng-for="#name of accounts" class="collection-item">{{ name }}</li>'+
                      '</ul>'
                    })  
                  ];  
          
           function forceNav(){}
            forceNav.annotations=[
             new angular.ComponentAnnotation({
                  selector : "forceNav"
                }),
                new angular.ViewAnnotation({
                  template : '<nav><div class="nav-wrapper"></div></nav>'
                })
              ]; 
              function forceBody(){}
                forceBody.annotations=[
                 new angular.ComponentAnnotation({
                      selector : "forceBody"
                    }),
                    new angular.ViewAnnotation({
                      directives : [forceList,forceNav],
                      template : '<forceNav></forceNav><forceList></forceList>'
                    })
                  ];    
                                 
            document.addEventListener("DOMContentLoaded", function () {
            angular.bootstrap(forceBody);
            });
         </script>