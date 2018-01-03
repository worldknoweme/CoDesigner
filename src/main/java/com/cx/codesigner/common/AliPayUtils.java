package com.cx.codesigner.common;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.domain.AlipayTradePayModel;
import com.alipay.api.internal.util.StringUtils;
import com.alipay.api.request.AlipayTradePagePayRequest;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * 阿里支付的接口
 */
public class AliPayUtils {

    //真实环境URL
    public static String URL = "http://openapi.alipaydev.com/gateway.do";
    //测试环境URL
    public static String TEST_URL = "https://openapi.alipaydev.com/gateway.do";
    //应用ID

    //2017120800448399
    public static String APP_ID = "2016090800463773";
    //应用私钥
    public static String APP_PRIVATE_KEY = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCvM03PPNKWXjIqOTK3r6JV4PNnOuvNBXecNZIPEOSW+LRpyfd0KmHPD5Xqgtu/qfJFl5L+J4xyOyAYWB//AzGEwZ4JR+dnvr4A/uJDYXFKUMOkYmfMMhg6yPBCvexSAhtA3U15m1HBwey/qvP2xLVmxQvI4Jto5cVzh5vE2aEUx+zHyQkakXfb/HsdEw8H2pMErAsJubi0+x42Qqt+2W3eDIr3d/PkHebm2F5V+XSAsERldK1wk7tRIedmgJX7yp2yL7YfLfgPV+FklnEGOv7eKfu5EgXG9IIpwK0b1grPLQW60bjxbaff1bwW9qR7TD2ZmYLyn0WAvbgq18+1/ZihAgMBAAECggEARO2yVy5ey7oTknkecxYukAsIuDx+ORNFk7ef1z2WMa93i4diS9nA0W4YVUNWoXmDT83qjwOQRgDtB6bkL7hZ6xkhzBT1/eMVbd7ZthjIMazEzA/LNpMe5UHZBOkj6L/baRGoQYfSCqD5PA9OHHAXzm8Hy+hSPFrp7CIWLsRQk5PNz/hDJea+4gHLK3gIplKSjKMn4rR9pStM+pAb5QNxplBHdeVdVrlAyskf4LKMgVEtPsRjnRpu1xVDUvpOV3Ss7zuwObu29izP0DaE8rxcoW6ePfAJbc7VcrmuDcbNFdGhEDzHjl+swsweBcHr0TPtOb6EXPKwDj83IAiKGil6YQKBgQDdH/X7+KSEuglRrXmXVRwucR1k5PSc1pI1WPAafiPOUN7svikK71fbG/f49IKWz/usZ7QAiBROjOOUxs1rsTfvAiZwIHZ9mq26JgSzaQc8Tq45xEaxcpdHGMMLKlWl0H/1dP6d0st/UIIVBjapeLm2FfNxv8Az3NEf7OPjt5PQMwKBgQDK1R49XT2F1KibIEwkZLZcpC5Br+LkLClYUyURoIcC+rEYZ2ic5uMzi97H7yRJmJT+xeXTGUlfuaN91LPd8UPEA+g8fTVJgjWmmUs8XtZbkBYryjzCrY96HhrvJ2K9MddUuNwBCR2juthe2IPB8u1pbwoWU8OyE+0tQip368qP2wKBgAChhbcpV3bVfQ9RmmY3JPRw+C+Ag74q0pH6Zfz9XSbKjkhIpp9UXYDPjJ6WPAUoJMSyKw5RVRWAS2nyQ0XKZKl27RsmzI/BMDu2vg6w/wdKBi8+AyGgfRQD2xKeFU560NKnec6DencriKN8uA01vfnqCB7L+EVtnN8lcuUEchSHAoGBAL55dHRb4zKSieNjaR2kFjzZUTcOXRu4/Pqc2eq7vQ3nLfek5HCzwhjd+M/4mzMhvomifjjHPkhOpGG+JUr/Dow8vxJO4oOta4SP4D9JMDO8E5X7zSNkqaAcNV7wtaDF9VjyYGf4j4T6KcanvNOdtaWVSPu+nb/VRp2BzS/gldCRAoGBAJz6IMWMjfHxA6tOr2SUptdsI4H4UC8cEuEvqsmtT1E44VHDIVGXWAhUAR8kwGRfsP3DVvc+jk7acLMmSW5GZ9V6SkWPuzV+4Kjgy1r0EkfBBMEJz8f4Z1sAVKaFNrn+H743XGEd8x5ww4+nEghXKKh2df4zhICGieNW3wYGYc/z";
    //参数返回格式，只支持json
    public static String FORMAT = "JSON";
    //编码集，支持GBK/UTF-8
    public static String CHARSET = "UTF-8";
    //支付宝公钥，由支付宝生成
    public static String ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArzNNzzzSll4yKjkyt6+iVeDzZzrrzQV3nDWSDxDklvi0acn3dCphzw+V6oLbv6nyRZeS/ieMcjsgGFgf/wMxhMGeCUfnZ76+AP7iQ2FxSlDDpGJnzDIYOsjwQr3sUgIbQN1NeZtRwcHsv6rz9sS1ZsULyOCbaOXFc4ebxNmhFMfsx8kJGpF32/x7HRMPB9qTBKwLCbm4tPseNkKrftlt3gyK93fz5B3m5theVfl0gLBEZXStcJO7USHnZoCV+8qdsi+2Hy34D1fhZJZxBjr+3in7uRIFxvSCKcCtG9YKzy0FutG48W2n39W8Fvake0w9mZmC8p9FgL24KtfPtf2YoQIDAQAB";
    //商户生成签名字符串所使用的签名算法类型，目前支持RSA2和RSA，推荐使用RSA2
    public static String SIGN_TYPE = "RSA2";

    public static void doPost(HttpServletRequest httpRequest,
                       HttpServletResponse httpResponse,AlipayTradePayModel model) throws ServletException, IOException {

        //获得初始化的AlipayClient
        //实际环境接口：https://openapi.alipay.com/gateway.do
        //调试接口：http://openapi.alipaydev.com/gateway.do
        AlipayClient alipayClient = new DefaultAlipayClient(TEST_URL,
                APP_ID, APP_PRIVATE_KEY, FORMAT, CHARSET, ALIPAY_PUBLIC_KEY, SIGN_TYPE);
        AlipayTradePagePayRequest alipayRequest = new AlipayTradePagePayRequest();//创建API对应的request
        //在公共参数中设置回跳和通知地址
        alipayRequest.setReturnUrl("http://domain.com/CallBack/return_url.jsp");
        alipayRequest.setNotifyUrl("http://domain.com/CallBack/notify_url.jsp");
        alipayRequest.setBizModel(model);
//        alipayRequest.setBizContent("{" +
//                "    \"out_trade_no\":\"20150320010101001\"," +
//                "    \"product_code\":\"FAST_INSTANT_TRADE_PAY\"," +
//                "    \"total_amount\":88.88," +
//                "    \"subject\":\"Iphone6 16G\"," +
//                "    \"body\":\"Iphone6 16G\"," +
//                "    \"passback_params\":\"merchantBizType%3d3C%26merchantBizNo%3d2016010101111\"," +
//                "    \"extend_params\":{" +
//                "    \"sys_service_provider_id\":\"2088511833207846\"" +
//                "    }"+
//                "  }");//填充业务参数
        String form="";
        try {
            form = alipayClient.pageExecute(alipayRequest).getBody(); //调用SDK生成表单
        } catch (AlipayApiException e) {
            e.printStackTrace();
        }
        httpResponse.setContentType("text/html;charset=" + CHARSET);
        httpResponse.getWriter().write(form);//直接将完整的表单html输出到页面
        httpResponse.getWriter().flush();
        httpResponse.getWriter().close();
    }

    public static Map<String,String> changeMap(Map<String,String[]> requestParams){
        Map<String,String> params = new HashMap<String,String>();
        for (Iterator<String> iter = requestParams.keySet().iterator(); iter.hasNext();) {
            String name = (String) iter.next();
            String[] values = (String[]) requestParams.get(name);
            String valueStr = "";
            for (int i = 0; i < values.length; i++) {
                valueStr = (i == values.length - 1) ? valueStr + values[i]
                        : valueStr + values[i] + ",";
            }
            //乱码解决，这段代码在出现乱码时使用。如果mysign和sign不相等也可以使用这段代码转化。
            //valueStr = new String(valueStr.getBytes("ISO-8859-1"), "UTF-8");
            params.put(name, valueStr);
        }
        return params;
    }
}
