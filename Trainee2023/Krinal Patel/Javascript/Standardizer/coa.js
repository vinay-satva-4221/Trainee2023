Sortable.create(source, {
    animation: 100,
    group: 'list-1',
    draggable: '.list-group-item',
    handle: '.list-group-item',
    sort: true,
    filter: '.sortable-disabled',
    chosenClass: 'active'
  });
  
  Sortable.create(destination, {
    group: 'list-1',
    handle: '.list-group-item'
  });
  

  Sortable.create(mostlikely, {
    group: 'list-1',
    handle: '.list-group-item'
  });

  Sortable.create(likely, {
    group: 'list-1',
    handle: '.list-group-item'
  });

  Sortable.create(possible, {
    group: 'list-1',
    handle: '.list-group-item'
  });
