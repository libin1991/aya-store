/**
 * ▶ ayaStore 0.1.0  
 * <https://github.com/milobluebell/aya-store>
 * 
 * copyright 2019 milobluebell
 * available under MIT license
 * 
 * @author milobluebell
 * @version 0.1.0
 */

import StoreProto from './StoreProto';

class $Store extends StoreProto {

    constructor () { super() }

    // 全局store
    store = {};

}

export default $Store;