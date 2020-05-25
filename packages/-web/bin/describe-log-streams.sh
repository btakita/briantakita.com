#!/bin/sh
aws logs describe-log-streams --log-group-name /aws/lambda/bloomfieldnetworks --max-items 2 --order-by LastEventTime --descending