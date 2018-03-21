package com.ghca.api.sys.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by bingbing on 2018/3/8.
 */
@RestController
@RequestMapping("/app")
public class AppController {

    //简单的后台接口，用于测试
    @RequestMapping("/info")
    public Object info(){
        Map<String,Object> map = new HashMap<>();
        map.put("user_token","token");
        return map;
    }

}
