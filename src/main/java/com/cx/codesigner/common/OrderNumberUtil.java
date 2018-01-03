package com.cx.codesigner.common;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 生成唯一单号接口
 */
public class OrderNumberUtil {

    /**
     * 生成支付订单号规则
     * 当前系统时间（具体到毫秒）+四位随机数
     * @return
     */
    public static String getOrderNumber(){
        SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMddhhmmssSSS");
        String orderNum = sdf.format(new Date());

        int randomNum = (int)((Math.random()*9+1)*1000);
        orderNum = orderNum+randomNum;
        return orderNum;
    }
}
