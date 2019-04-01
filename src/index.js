/**
 * ▶ ayaStore 0.0.4
 * <https://github.com/milobluebell/aya-store>
 * 
 * copyright 2019 milobluebell
 * available under MIT license
 * 
 * @author milobluebell
 * @version 0.0.4
 */

import StoreProto from './StoreProto';

class $Store extends StoreProto {

    constructor () { super() }

    // 全局store
    store = {};

}

export default $Store;