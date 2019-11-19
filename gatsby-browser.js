/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

module.exports = {
  onInitialClientRender: () => {
    navigator.userAgent.toLowerCase().indexOf('chrome') > -1
      ? window.console.log.apply(console, [
          '\n %c Made by Tagbangers %c %c %c https://tagbangers.co.jp/ %c %c \n',
          'color: #fff; background: #ff0000; padding:5px 0;',
          'background: #131419; padding:5px 0;',
          'background: #131419; padding:5px 0;',
          'color: #fff; background: #131419; padding:5px 0;',
          'background: #131419; padding:5px 0;',
          'color: #ff0000; background: #131419; padding:5px 0;',
        ])
      : window.console &&
        window.console.log('Made by Tagbangers - https://tagbangers.co.jp/')
  },
}
module.exports.onRouteUpdate = ({ location, prevLocation }) => {
  prevLocation ? document.body.scroll(0, 0) : document.body.scrollTo(0, 0)
}
