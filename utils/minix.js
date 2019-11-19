import api from '@/utils/interfaces.js';

module.exports = {
		methods: {
			imageError: function(e) {
				console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},
			ganImage() {
				const pub_img_num = 355;
				const pub_img_current_no = function() {
					return Math.floor(Math.random() * pub_img_num + 1);
				};
				const pub_img_url = function() {
					return api.GET_IMAGE_STATIC + 'pub_' + pub_img_current_no() + '.jpg';
				};
				return pub_img_url();
			
			},
			
		}
	}
