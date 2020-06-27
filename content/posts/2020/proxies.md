---
author:
  name: "Harrison Cook"
date: 2020-06-15T17:10:54+12:00
linktitle: What Is a Proxy?
type:
- post
- posts
title: What Is a Proxy?
weight: 10
series:
- self-learning
draft: false
tags:
  - Proxy
  - Proxies
  - Self-learning
---
A proxy is something that acts as an intermediary between two parties. In the case of networking, a 'proxy' is synonymous with 'proxy server'. At a high level, a proxy server is a server that acts as an intermediary between a client and a server. 

## Half Proxy
Also known as a tunneling proxy, a half proxy simply passes on the client's connection. That is, the client's connection goes to a server *via* the proxy. These types of proxies do not typically modify or interact with the connection/data in any meaningful way. Because of this Half Proxies operate on layer 4 of the [OSI Model](https://en.wikipedia.org/wiki/OSI_model). Half proxies only interact with the transport layer protocols (e.g. TCP, UDP), rather than the application layer protocols (e.g. HTTP, SSH). One of the common uses of half proxies is to change the source of a connection/request from the client to the proxy (to the server, it appears as though the connection/request came from the proxy).

```
Half Proxy example
==================
 
+----------+                +--------------+                +----------+
|          |   Connection   |  Half Proxy  |   Connection   |          |
|  Client  | <--------------------------------------------> |  Server  |
|          |                |              |                |          |
+----------+                +--------------+                +----------+
```


## Full Proxy
In a full proxy, a client's connection reaches the proxy and then the proxy sends out a new, separate connection to the server. This results in two connections instead of only one like in a half proxy. Because of this, a full proxy operates on layer 7 of the OSI Model. They can also modify the contents of the data being sent/received, change the destination of connections, or even block connections altogether. A full proxy must fully implement the required protocols as both a client and a server since it will act as a server to the original client and act as a client to the original server.

```
Basic Full Proxy example
========================

+----------+                +--------------+                +----------+
|          |  Connection 1  |              |  Connection 2  |          |
|  Client  | <------------> |  Half Proxy  | <------------> |  Server  |
|          |                |              |                |          |
+----------+                +--------------+                +----------+
```

```
Full Proxy changing destination example  
=======================================
                                                            +-------------+
                                              Connection 2  |    New      |
                                                  +-------> | Destination |
                                                  |         |             |
                                                  |         +-------------+
                                                  |
+----------+                +--------------+      |         +-------------+
|          |  Connection 1  |              |      |         |  Original   |
|  Client  | <------------> |  Half Proxy  | <----+         | Destination |
|          |                |              |                |             |
+----------+                +--------------+                +-------------+
```

### Reverse and Forward Proxies
While both reverse and forward of proxies technically don't have to be full proxies, in most practical applications they will be, so I will discuss reverse and forward proxies as if they are always full proxies. All proxy servers are either reverse or forward proxies.

#### Reverse Proxy
A reverse proxy is simply a proxy that sits 'in front of' (often multiple) servers rather than sitting in front of a client. To be clearer, the client's connection goes to the internet, then the reverse proxy, then the server. In most cases, the client treats the reverse proxy as the server (it doesn't know the proxy is a proxy and thinks it is a normal server), and doesn't know about what is behind the reverse proxy. 

Reverse proxies have many use cases, one of the more common ones is as a load balancer. As a load balancer, a reverse proxy takes in the client's connection and chooses a low-load server (sitting behind the proxy) to pass the connection to, allowing it to 'balance' the load across the servers behind the load balancer.

```
A reverse proxy sits 'in front of' the server
=============================================

+--------+             _( )_( )_             +---------+            +--------+
|        | Connection (_   _  - ) Connection | Reverse | Connection |        |
| Client | <------------Internet-----------> |  Proxy  | <--------> | Server |
|        |            (_ -  _  _)            |         |            |        |
+--------+              (_)(__)              +---------+            +--------+
```

```
Load balancer reverse proxy example  
===================================
                                                                  +----------+
                                            Connection 2          |          |
                                                      +---------> | Server 1 |
                                                      |           |          |
                                                      |           +----------+
                                                      |
+----------+                +------------+            |           +----------+
|          |  Connection 1  |    Load    |       Load | Balancer  |          |
|  Client  | <------------> |  Balancer  | <----------+---------> | Server 2 |
|          |                |            |    Chooses | Server    |          |
+----------+                +------------+            |           +----------+
                                                      |
                                                      |           +----------+
                                                      |           |          |
                                                      +---------> | Server 2 |
                                                                  |          |
                                                                  +----------+
```

### Forward Proxy
A forward proxy is the counterpart to the reverse proxy, it sits 'in front' of the client instead of the server. In this case, the client's connection goes to the forward proxy, then the internet and finally the server. Forward proxies are what most people mean when they say 'proxy'. One of the common uses of a forward proxy is to pass requests from a private network to the internet through a firewall. They can also be used to filter or monitor outgoing traffic, for example, checking that the traffic is safe and allowing/blocking that traffic appropriately.

```
A forward proxy sits 'in front of' the client
=============================================

+--------+            +---------+             _( )_( )_             +--------+
|        | Connection | Forward | Connection (_  _   - ) Connection |        |
| Client | <--------> |  Proxy  | <------------Internet-----------> | Server |
|        |            |         |            (_ -  _  _)            |        |
+--------+            +---------+              (_)(__)              +--------+
```

---

### Further Reading:
- [Proxy Server - Wikipedia](https://en.wikipedia.org/wiki/Proxy_server)
- [The Concise Guide to Proxies (2008)](https://devcentral.f5.com/s/articles/the-concise-guide-to-proxies)
- [Proxies — An in-depth intro](https://medium.com/consonance/proxies-an-in-depth-intro-4bb569326a34)
- [What is a Proxy (YouTube)](https://www.youtube.com/watch?v=jGQTS1CxZTE)

---

### Why did I write this?
I am endeavouring to do a write-up on topics I am trying to learn more about. This helps cement my knowledge of the subject as it has been shown that teaching something can help you learn it [[1]](https://www.sciencedirect.com/science/article/abs/pii/S0361476X13000209)[[2]](https://onlinelibrary.wiley.com/doi/abs/10.1002/acp.3410?campaign=wolearlyview). I also hope these write-ups might be able to help others who are also struggling with the topic.
