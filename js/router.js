// 定义组件
var Index = Vue.extend({
	template: '<p>This is Home</p>'
})

var Foo = Vue.extend({
	template: '<p>This is foo!</p>'+
			  '<p>'+
			  // 定义子路由
			  	'<a v-link="{path: \'/foo/foa\'}">foa</a> '+
			  	'<a v-link="{path: \'/foo/baz\'}">baz</a>'+
			  	'<router-view></router-view>'+
			  '</p>'
})

var Bar = Vue.extend({
	template: '<p>This is bar!</p>'
})

// 路由需要一个根组件
var App = Vue.extend({
	template: '<div>'+
				'<h1>Hello App!</h1>'+
				'<a href="http://www.baidu.com">百度一下</a>'+
				'<p>'+
					'<a v-link="{path: \'/foo\'}">Go to Foo</a> '+
					'<a v-link="{path: \'/bar\'}">Go to Bar</a>'+
				'</p>'+
				'<router-view></router-view>'+
			'</div>'
})

// 创建路由实例
var router = new VueRouter()

// 定义路由规则
router.map({
	'/': {
		component: Index
	},
	'/foo': {
		component: Foo,
		subRoutes: {
			'/': {
				component: {
					template: '<p>Home</p>'
				}
			},
			'/foa': {
				component: {
					template: '<p>Foa</p>'+
							'<p>'+
							'<p>path: {{$route.path}}</p>'+
								'<a v-link="{path: \'/foo/foa/com\'}">com</a> '+
								'<a v-link="{path: \'/foo/foa/net\'}">net</a>'+
								'<router-view></router-view>'+
							'</p>'
				},
				subRoutes: {
					'/': {
						component: {
							template: '<h2>Domain</h2>'
						}
					},
					'/com': {
						component: {
							template: '<h2>Com</h2>'
						}
					},
					'/net': {
						component: {
							template: '<h2>Net</h2>'
						}
					}
				}
			},
			'/baz': {
				component: {
					template: '<p>Baz</p>'
				}
			}
		}
	},
	'/bar': {
		component: Bar
	}
})

// 启动应用
router.start(App,'#app')