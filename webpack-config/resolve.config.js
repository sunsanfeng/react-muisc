const Exports = require('./path.config.js');

module.exports = {
	extensions:['.js', '.jsx', '.json', '.css'],
	//为常用模块配置别名,可使用$触发精确匹配
	alias: {
		//css
		css: Exports.Style,
		//tpl
		component: Exports.Template,
		container: Exports.Container,
		router: Exports.Router,
		common: Exports.Common,
		api: Exports.Api,
		baseComponent: Exports.BaseComponent,
		reduxd: Exports.Reduxd,
		hightComponent: Exports.HightComponent
	}
}
