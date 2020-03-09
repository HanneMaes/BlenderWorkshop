function documentReady() {

  // print the workshop
  var workshopData = getWorkshops()
  var workshopHtml = ''
  for(var i in workshopData) {

    // the link
    workshopHtml += workshopData[i].icon + ' <a href="workshops/' + workshopData[i].name + '.html">' + workshopData[i].name + '</a>'

    // the tags
    workshopHtml += '<div class="tags">'
    for(var tag in workshopData[i].tags) workshopHtml += '<span class="tag">' + workshopData[i].tags[tag] + '</span>' // the tags
    workshopHtml += '</div><br>'
  }
  document.getElementById('workshops').innerHTML = workshopHtml;
}