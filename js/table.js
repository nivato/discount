(function(){

    function Table(data){
        this.products = data.products;
        this.container = document.getElementsByClassName('container')[0];
    }

    Table.prototype.render = function(){
        this.formTable();
    };

    Table.prototype.formTable = function(){
        this.table = document.createElement('table');
        var cls = document.createAttribute('class');
        cls.value = 'table table-hover';
        this.table.setAttributeNode(cls);
        this.table.appendChild(this.formThead());
        this.table.appendChild(this.formTbody());
        this.container.appendChild(this.table);
    };

    Table.prototype.formThead = function(){
        var colTitles = ['Product', 'Price, грн.', 'Discount, %', 'Discount, грн.'];
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        var th, textNode;
        for (var i = 0; i < colTitles.length; i++){
            th = document.createElement('th');
            textNode = document.createTextNode(colTitles[i]);
            th.appendChild(textNode);
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        return thead;
    };

    Table.prototype.formTbody = function(){
        var tbody = document.createElement('tbody');
        for (var i = 0; i < this.products.length; i++){
            tbody.appendChild(new Row(this.products[i]).render());
        }
        return tbody;
    };

    window.Table = Table;

})();
