## 修改数据库的操作 
```

// 生成实体变更
dotnet-ef migrations add XXXX

// 其中如果包含外键相关的，就在 XXXX文件中 将Up和Down方法中的外键相关进行删除
// 新创建表的时候一起添加外键应该是没问题的，如果是修改表的时候可能就存在问题


// 同步到数据库
dotnet-ef database update

// 超过一个dbcontext就需要指定

dotnet-ef migrations add XXXX -c SecondContext

dotnet-ef migrations add XXXX -c DvsContext --framework net6.0

dotnet-ef database update  -c SecondContext

dotnet-ef database update  -c DvsContext --framework net6.0

```


## api.nuget.ogr/v3/index.json无法访问是因为翻墙的问题 
 
 ```
 将代理更改为直连即可
 ```

## linux 服务位置
```
 // 自定义服务地址
 /usr/lib/systemd/system/dvsv3-datamonitor.service

 [Unit]
  Description=dvsv3-datamonitor
  After=network-online.target
  Wants=network-online.target

  [Service]
  # modify when deploy in prod env
  User=dvs
  Group=dvs

  Type=simple
  ExecStart=/usr/local/dotnet-sdk/dotnet /usr/local/sunlight/dvsv3/dvs-datamonitor/DVS.DataMonitor.Api.dll
  WorkingDirectory=/usr/local/sunlight/dvsv3/dvs-datamonitor

  Restart=always
  RestartSec=1
  StartLimitInterval=0

  [Install]
  WantedBy=multi-user.target



 // 系统服务地址
 /etc/systemd/system


// 设置服务开机自动启动
systemctl enable dvsv3-datamonitor

// 重启服务
systemctl restart dvsv3-datamonitor

// 修改配置文件
systemctl daemon-reload

```


## nginx 配置
```
// 所在路径
/etc/nginx/conf.d/dvsv3.conf
// 从这个配置文件中也可以找到swagger 配置路径docs的服务

location ~ ^/api/datamonitor/ {
    proxy_pass http://127.0.0.1:12017;
}

修改完毕后nginx -s reload
```

## 子系统服务配置文件
```
/usr/local/sunlight/dvsv3/etc/dvs-datamonitor-appsettings.json
{
    "Urls": "http://*:12017",
    "WorkerId": 8,
    "Serilog": {
        "WriteTo": [
            {},
            {
                "Name": "File",
                "Args": {
                    "path": "/var/log/sunlight/v3/dvs-datamonitor.txt"
                }
            },
            {}
        ]
    }
}

```


## 数据导出

```
// 导出模版
// SELECT * FROM Template;

// 异步任务执行装填
select * from AsyncTask s order by s.CreatedAt desc ;

public enum AsyncTaskState
{
    待处理 = 0,
    处理中 = 1,
    处理完成 = 2,
    失败 = 9
}

 select * from `Options`  

 key: storageoptions:path  是文件上传的路径地址                          
```


## 服务器上log.txt日志文件存放路径
```
/var/log/sunlight/v3
```

## linux下nginx安装
- 2022-05-11-linux


## 区域同步
```
之前使用的是  BasicArea
SELECT  SUM(c.total) total,SUM(c.tobeSubmitted) tobeSubmitted, SUM(c.submitted)  submitted 
FROM  CollectDataHouseholdSummary c 
 where c.type=2 and c.areaid in (select id from BasicArea t where t.IdSequences like @areaId )  


现在 BasicAreaEx
SELECT  SUM(c.total) total,SUM(c.tobeSubmitted) tobeSubmitted, SUM(c.submitted)  submitted 
FROM  CollectDataHouseholdSummary c 
 where c.type=3 and c.areaid in (select t.RegionId from BasicAreaEx t where t.RegionIdSequences like @areaid )  
```


## 修改表编码

```
 ALTER TABLE BasicAreaEx CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;
```



## mysql数据库操作
```
// 展示数据库列表
SHOW DATABASES;


```



## mysql执行数据同步时有可能有数据表访问权限的问题

## 判断枚举是否存在
```
            //if (!Enum.IsDefined(typeof(TaskType), model.TaskType))
            //{
            //    throw new ErrorCodeException(-1, "传入的任务类型不存在");
            //}
            //else
            //{
            //    spec.Query.Where(item => item.TaskType == model.TaskType);
            //}
```

## 将EFCore IDbContextTransaction转换为 Mysql驱动下 DbTransaction

```
    public static DbTransaction GetDbTransaction(this IDbContextTransaction source)
    {
        return (source as IInfrastructure<DbTransaction>).Instance;
    }
```

## 事务里面如果有创建表结构的则不会跟随事务

## 数据库菜单更新

```
etc/dvs-systemservice-appsettings.json 中的MenuSeedData 设置为true


// systemctl restart dvsv3-systemservice
// 则启动服务的时候就会初始化更新菜单
// 更新菜单的规则：code相等则update，code不相等则insert,code不存在则不操作

// 通过接口将数据初始化到json文件中
// 接口要在root用户下才能执行
api/basic/Menu/seed

// 执行完接口后，将接口返回数据的data，也就是菜单数组拷贝到项目中
DVS.Basic/Templates/Menu.json

// 提交代码后，通过流水线进行自动部署

//指定某个服务进行设置最上面的参数即可
```

## 定时任务 
    ```
    // 定时任务存在于dvsv3-systemservice服务中

    // dvs-systemservice-appsettings.json可以配置定时任务的开启时间周期

    // ScheduleTaskOptions.cs 以及可以直接在代码中设置默认的时间和周期 

    // 通过代码 AddCronServices开启

    // 查看所有程序集中的class 继承了 CronScheduleService的定时任务

    // 通过单例模式注册
    services.Add(new ServiceDescriptor(typeof(IHostedService), a, ServiceLifetime.Singleton));


    // 继承了IHostedService ，则相当于后台任务。通过依赖注入注册之后便会在后台运行了

    // 然后 重写ExecuteAsync， 这个服务中的ExecuteAsync 方法会一直执行
    ```



## rabbitmq 异步任务处理
```
  // 首先在Program.cs中注册调用 builder.Services.InitServices
  
  // 其中 通过services.AddDistributedEventBus(configuration);

  // 实现读取配置文件中的rabbitmq配置信息
  // 以及通过依赖注册将RabbitMQEventPublisher 发布者和 RabbitMQEventSubscriber 消费者注册到容器中

  //将所有的处理事件通过 services.AddEventHandlers(); 注入容器中

  // rabbitmq 异步任务主要都在dvsv3-systemservice服务中进行处理 
  // 通过app.InitApp(..,,,,onlyGlobalEvent: false) 
  // onlyGlobalEvent: false 处理事件
  // 通过 app.UseDistributedEventBus(onlyGlobalEvent); 中的 subscriber.Subscribe(); 消费者订阅事件
  

```