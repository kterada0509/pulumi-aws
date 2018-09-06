# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class S3BucketAssociation(pulumi.CustomResource):
    """
    Associates an S3 resource with Amazon Macie for monitoring and data classification.
    
    ~> **NOTE:** Before using Amazon Macie for the first time it must be enabled manually. Instructions are [here](https://docs.aws.amazon.com/macie/latest/userguide/macie-setting-up.html#macie-setting-up-enable).
    """
    def __init__(__self__, __name__, __opts__=None, bucket_name=None, classification_type=None, member_account_id=None, prefix=None):
        """Create a S3BucketAssociation resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not bucket_name:
            raise TypeError('Missing required property bucket_name')
        elif not isinstance(bucket_name, basestring):
            raise TypeError('Expected property bucket_name to be a basestring')
        __self__.bucket_name = bucket_name
        """
        The name of the S3 bucket that you want to associate with Amazon Macie.
        """
        __props__['bucketName'] = bucket_name

        if classification_type and not isinstance(classification_type, dict):
            raise TypeError('Expected property classification_type to be a dict')
        __self__.classification_type = classification_type
        """
        The configuration of how Amazon Macie classifies the S3 objects.
        """
        __props__['classificationType'] = classification_type

        if member_account_id and not isinstance(member_account_id, basestring):
            raise TypeError('Expected property member_account_id to be a basestring')
        __self__.member_account_id = member_account_id
        """
        The ID of the Amazon Macie member account whose S3 resources you want to associate with Macie. If `member_account_id` isn't specified, the action associates specified S3 resources with Macie for the current master account.
        """
        __props__['memberAccountId'] = member_account_id

        if prefix and not isinstance(prefix, basestring):
            raise TypeError('Expected property prefix to be a basestring')
        __self__.prefix = prefix
        """
        Object key prefix identifying one or more S3 objects to which the association applies.
        """
        __props__['prefix'] = prefix

        super(S3BucketAssociation, __self__).__init__(
            'aws:macie/s3BucketAssociation:S3BucketAssociation',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'bucketName' in outs:
            self.bucket_name = outs['bucketName']
        if 'classificationType' in outs:
            self.classification_type = outs['classificationType']
        if 'memberAccountId' in outs:
            self.member_account_id = outs['memberAccountId']
        if 'prefix' in outs:
            self.prefix = outs['prefix']
