---
title: Static Websites Using AWS CDK
author: Brian Takita
date: 10/8/19 12:00
description: Create a https static website using AWS CDK, Cloudfront, & S3
---


### Note

Here is a the [gist](https://gist.github.com/btakita/2572df4fae440dc065eb888f53316bdd)
    containing the AWS CDK code to build a static https website.

### Options for static websites

There are a number of options to build a static website.
If you are confident you only want a static website,
    there are a number of simple & inexpensive solutions. 

### Why go with AWS

AWS offers S3 & Cloudfront to create a https static website.
Using AWS S3 & Cloudfront is more complicated than other solutions,
    however if you are using AWS for other reasons,
    you can integrate your site with the rest of your stack on
    the AWS platform.

### Programatic Building of Stacks

Automating you stacks is useful to share configurations & to replicate
    multiple environments for testing.

Automating a stack using AWS Cloudformation is a complicated endeavor
    requiring research & troubleshooting to do even the simplest of
    tasks.
This is largely due to the breadth, configurability, & flexibility
    of the AWS platform.

### AWS CDK

AWS CDK is a more effective way to develop AWS stacks than working
    directly with AWS Cloudformation templates or AWS SAM,
    especially with a statically typed language like Typescript,
    because the type system can assist the programmer in
    troubleshooting the necessary configuration.
There is a large community using AWS CDK & example solutions
    provide a good starting point.
Static typing, a good IDE, a search engine, & thought helps with the rest.

### http or https?

If you don't need https, you can have a S3 Bucket for your domain,
    and point the DNS (external or Route53), to the S3 bucket.

If you need https, you will need to use Cloudfront in front of the
    S3 Bucket.

### Process

I started with the [static site example](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/static-site/)
    [aws-cdk-examples project](https://github.com/aws-samples/aws-cdk-examples).
This example created a basic static site over https.
All was well except for the inability to rewrite subdirectory urls to
    serve the index.html document.
Any request to `GET /subdirectory/` responded with a 403.

The solution is to
    [add a Lambda@Edge function](https://aws.amazon.com/blogs/networking-and-content-delivery/implementing-default-directory-indexes-in-amazon-s3-backed-amazon-cloudfront-origins-using-lambdaedge/).

I found [this post](https://lanwen.ru/posts/aws-cdk-edge-lambda/) to be
    useful in explaining some of the CDK code needed to create the Lamba@Edge function.

### Environments & Unique Name Constraints

AWS requires that resource names be unique.
The unique name constraint can pose issues when you want to have
    multiple environments for your site/app.
To work with the uniqueness constraint, the environment name will be
    added to the name for each resource.

I used the subdomain context variable to create the stage.

```ts
import { CONTEXT_ENV } from '@aws-cdk/cx-api'
import { StaticSite } from './static-site'
type Context = {
	domain: string,
	subdomain: string,
}
const ctx = JSON.parse(process.env[CONTEXT_ENV] as string) as Context
export const stage = ctx.subdomain || 'prod'
export const base_id = `mystaticsite-${stage}`
```

### Code

The code is in [this gist](https://gist.github.com/btakita/2572df4fae440dc065eb888f53316bdd).
My DNS is hosted externally & I already had a TLS Certificate set up.
Commented out is the Route53 & DnsValidatedCertificate configurations.

### Some Useful links

* https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-at-the-edge.html
* https://stackoverflow.com/questions/26206116/aws-cli-disable-distribution#26209272
