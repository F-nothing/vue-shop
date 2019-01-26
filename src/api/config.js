//QQ接口配置
export const commonParams={
    g_tk:1701526673,
    inCharset:'utf-8',
    outCharset:'utf-8',
    notice:0,
    format:'jsonp'
};

//淘宝接口
export const commonTbParams={

    code:'utf-8',
    area:'c2c',
    nick:'',
    sid:null,
    callback:'jsonp154815303802053403'
};

//淘宝商品查询
export const getfindshop={
    keyword:'QQ',
    datatype:1,
    callback:'jdSearchResultBkCbA',
    page:2,
    pagesize:10,
    ext_attr:'no',
    brand_col:'no',
    price_col:'no',
    color_col:'no',
    size_col:'no',
    ext_attr_sort:'no',
    merge_sku:'yes',
    multi_suppliers:'yes',
    area_ids:'1,72,2819',
    qp_disable:'no',
    fdesc:'北京',
    t1:1548252388235
};



export const opitons ={
    param:'jsonpCallback'
};

export const ERR_OK = 0;
