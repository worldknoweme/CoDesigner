package com.cx.codesigner.controller;

import com.alipay.api.domain.AlipayTradePayModel;
import com.alipay.api.internal.util.AlipaySignature;
import com.cx.codesigner.common.AliPayUtils;
import com.cx.codesigner.common.OrderNumberUtil;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * 阿里支付接口
 */
@Controller
public class AliPayController {

    @RequestMapping("/goPay")
    public void goPay(HttpServletRequest request, HttpServletResponse response){
        //获取支付金额
        String money = request.getParameter("money");
        AlipayTradePayModel model = new AlipayTradePayModel();
        model.setOutTradeNo(OrderNumberUtil.getOrderNumber());
        model.setProductCode("FAST_INSTANT_TRADE_PAY");
        model.setTotalAmount(money);
        model.setSubject("Javen PC支付测试");
        model.setBody("Javen IJPay PC支付测试");
        try {
            AliPayUtils.doPost(request,response,model);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
    @RequestMapping("/returnUrl")
    public String returnUrl(ModelMap map, HttpServletRequest request, HttpServletResponse response){
        //获取支付宝GET过来反馈信息

        Map<String,String[]> requestParams = request.getParameterMap();
        Map<String,String> params = AliPayUtils.changeMap(requestParams);
        try {
            boolean signVerified = AlipaySignature.rsaCheckV1(params, AliPayUtils.ALIPAY_PUBLIC_KEY, AliPayUtils.CHARSET, AliPayUtils.SIGN_TYPE); //调用SDK验证签名
            if(signVerified){
                //此时证明充值成功，可以进行接下来的操作

            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return "success";
    }

    /**
     * 支付宝异步调用接口
     */
    @RequestMapping("/notifyUrl")
    public void notifyUrl(ModelMap map, HttpServletRequest request, HttpServletResponse response) {
        try {
            //获取支付宝POST过来反馈信息

            Map<String, String[]> requestParams = request.getParameterMap();
            Map<String, String> params = AliPayUtils.changeMap(requestParams);
            //商户订单号
            String out_trade_no = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"), "UTF-8");
            //支付宝交易号
            String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"), "UTF-8");
            //交易状态
            String trade_status = new String(request.getParameter("trade_status").getBytes("ISO-8859-1"), "UTF-8");
            //获取支付宝的通知返回参数，可参考技术文档中页面跳转同步通知参数列表(以上仅供参考)//
            //计算得出通知验证结果
            //boolean AlipaySignature.rsaCheckV1(Map<String, String> params, String publicKey, String charset, String sign_type)
            boolean verify_result = AlipaySignature.rsaCheckV1(params, AliPayUtils.ALIPAY_PUBLIC_KEY, AliPayUtils.CHARSET, AliPayUtils.SIGN_TYPE);
            if(verify_result){//验证成功
                //////////////////////////////////////////////////////////////////////////////////////////
                //请在这里加上商户的业务逻辑程序代码

                //——请根据您的业务逻辑来编写程序（以下代码仅作参考）——
                if(trade_status.equals("TRADE_FINISHED")){
                    //判断该笔订单是否在商户网站中已经做过处理
                    //如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
                    //请务必判断请求时的total_fee、seller_id与通知时获取的total_fee、seller_id为一致的
                    //如果有做过处理，不执行商户的业务程序

                    //注意：
                    //如果签约的是可退款协议，退款日期超过可退款期限后（如三个月可退款），支付宝系统发送该交易状态通知
                    //如果没有签约可退款协议，那么付款完成后，支付宝系统发送该交易状态通知。
                } else if (trade_status.equals("TRADE_SUCCESS")){
                    //判断该笔订单是否在商户网站中已经做过处理
                    //如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
                    //请务必判断请求时的total_fee、seller_id与通知时获取的total_fee、seller_id为一致的
                    //如果有做过处理，不执行商户的业务程序
                    //注意：
                    //如果签约的是可退款协议，那么付款完成后，支付宝系统发送该交易状态通知。
                }
                //——请根据您的业务逻辑来编写程序（以上代码仅作参考）——
                response.getWriter().println("success");
                response.getWriter().close();
                //////////////////////////////////////////////////////////////////////////////////////////
            }else{//验证失败
                response.getWriter().println("fail");
                response.getWriter().close();
            }
        } catch (Exception e) {
//            response.getWriter().println("fail");
//            response.getWriter().close();
//            logger.info("跳转到pc网站支付宝支付-同步不通知-页面-error");
            e.printStackTrace();
        }

    }

}
